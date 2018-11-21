import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatDetailMediaPage } from './chat-detail_media';

@NgModule({
  declarations: [
    ChatDetailMediaPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatDetailMediaPage),
  ],
})
export class ChatDetailPageModule {}
