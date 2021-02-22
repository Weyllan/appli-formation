import { MemeType } from './../../../shared/models/meme-type.model';
import { Component, OnInit } from '@angular/core';
import { memeTypes } from '../../../shared/constants/meme-types.constants';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-memes-generator',
  templateUrl: './memes-generator.component.html',
  styleUrls: ['./memes-generator.component.scss']
})
export class MemesGeneratorComponent implements OnInit {

  public memeTypes: MemeType[] = memeTypes;
  public memeForm: FormGroup;
  public urlMeme: string = '';
  private memeApi: string = environment.memesApi;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.memeForm = this.formBuilder.group({
      topText: '',
      bottomText: '',
      selectedMeme: ''
    });
  }

  ngOnInit() {
  }

  public callMemeService() {
    this.urlMeme = this.memeApi + "meme=" + this.memeForm.value['selectedMeme'] + "&top=" + this.memeForm.value['topText'] + "&bottom=" + this.memeForm.value['bottomText'];
  }
}
