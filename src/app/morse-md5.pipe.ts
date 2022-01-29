import { Pipe, PipeTransform } from '@angular/core';
import { PipeData } from './interfaces/pipe-data';
import {Md5} from 'ts-md5/dist/md5';
import { pipe } from 'rxjs';

@Pipe({
  name: 'morseMD5'
})
export class MorseMD5Pipe implements PipeTransform {

  transform(value: string, charOrMorse?: string ): string {
    const md5 = new Md5();
    let foundChar:any;
    let foundMorse: any;
    let pipeData =
    [
      {char: 'A', morseCode: '.-',  Md5Enc: md5.appendStr('A').end() as string },
      {char: 'B', morseCode: '-...',  Md5Enc: md5.appendStr('B').end() as string},
      {char: 'C', morseCode: '-.-.',  Md5Enc: md5.appendStr('C').end() as string},
    ]
    if(value) {
      foundChar = pipeData.filter(x => x.char == value)[0];
      foundMorse = pipeData.filter(x => x.morseCode == value)[0]
      if(foundChar || foundMorse) {
        if(charOrMorse) {
          let morseOrChar
           morseOrChar = pipeData.filter(x => x.char == charOrMorse)[0]
           if(morseOrChar) {
             return '{morsecode:' +foundChar.morseCode+'},' +
                    '{md5Enc:'+foundChar.Md5Enc+'}'
           }
           morseOrChar = pipeData.filter(x => x.morseCode == charOrMorse)[0]
           if(morseOrChar) {
            return '{char:' +foundChar.char+'},' +
                   '{md5Enc:'+foundChar.Md5Enc+'}'
          }
        }
        else {
          if(foundChar) {
             return '{morsecode:' +foundChar.morseCode+'},' +
                 '{md5Enc:'+foundChar.Md5Enc+'}'
          }
          else {
            return '{char:' +foundMorse.char+'},' +
            '{md5Enc:'+foundMorse.Md5Enc+'}'
          }

        }
      }
      else {
        throw Error('value not found!')
      }
    }
    else {
      throw Error('value is undefined!')
    }
  }

}
