import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { Reset_2Page } from '../pages/reset-2/reset-2';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { Signup1Page } from '../pages/signup1/signup1';
import { Signup2Page } from '../pages/signup2/signup2';
import { Signup3Page } from '../pages/signup3/signup3';
import { Signup4Page } from '../pages/signup4/signup4';
import { Signup5Page } from '../pages/signup5/signup5';
import { Signup6Page } from '../pages/signup6/signup6';
import { Signup7Page } from '../pages/signup7/signup7';
import { Signup8Page } from '../pages/signup8/signup8';
import { CreateGoalPage } from '../pages/create-goal/create-goal';
import { AddappointmentPage } from '../pages/addappointment/addappointment';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { AlampagePage } from '../pages/alampage/alampage';
import { MyAccountPage } from '../pages/my-account/my-account';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { AppCropperPage } from '../pages/app-cropper/app-cropper';
import { CalendarPage } from '../pages/calendar/calendar';
import { ChatlistPage } from '../pages/chatlist/chatlist';
import { VideoPage } from '../pages/video/video';
import { MyGoalDetailsPage } from '../pages/my-goal-details/my-goal-details'
import { ComingsoonPage } from '../pages/coming_soon/coming_soon';
import { AddEventPage } from '../pages/add-event/add-event';
import { ChatDetailPage } from '../pages/chat-detail/chat-detail';
import { ChatDetailMediaPage } from '../pages/chat-detail_media/chat-detail_media'
import { SubscriptionPage } from '../pages/subscription/subscription'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChartsModule } from 'ng2-charts';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { VideoPlayer } from '@ionic-native/video-player';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { FCM } from '@ionic-native/fcm';
import { CalendarModule } from 'ionic3-calendar-en';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { VideoEditor } from '@ionic-native/video-editor';
import { IonicImageViewerModule } from 'ionic-img-viewer';

import { InAppPurchase } from '@ionic-native/in-app-purchase';
import { AppUser } from '../providers/app-user';
import { AppBase } from '../providers/app-base';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ListPage,
    SignupPage,
    ForgotPasswordPage,
    Reset_2Page,
    ResetpasswordPage,
    Signup1Page,
    Signup2Page,
    Signup3Page,
    Signup4Page,
    Signup5Page,
    Signup6Page,
    Signup7Page,
    Signup8Page,
    CreateGoalPage,
    AddappointmentPage,
    ChangepasswordPage,
    AlampagePage,
    MyAccountPage,
    MyProfilePage,
    EditProfilePage,
    AppCropperPage,
    CalendarPage,
    ChatlistPage,
    VideoPage,
    MyGoalDetailsPage,
    ComingsoonPage,
    AddEventPage,
    ChatDetailPage,
    ChatDetailMediaPage,
    SubscriptionPage
  ],
  imports: [
    BrowserModule, ChartsModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    CalendarModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ListPage,
    SignupPage,
    ForgotPasswordPage,
    Reset_2Page,
    ResetpasswordPage,
    Signup1Page,
    Signup2Page,
    Signup3Page,
    Signup4Page,
    Signup5Page,
    Signup6Page,
    Signup7Page,
    Signup8Page,
    CreateGoalPage,
    AddappointmentPage,
    ChangepasswordPage,
    AlampagePage,
    MyAccountPage,
    MyProfilePage,
    EditProfilePage,
    AppCropperPage,
    CalendarPage,
    ChatlistPage,
    VideoPage,
    MyGoalDetailsPage,
    ComingsoonPage,
    AddEventPage,
    ChatDetailPage,
    ChatDetailMediaPage,
    SubscriptionPage
  ],
  providers: [
    AppUser,
    AppBase,
    StatusBar,
    SplashScreen,
    Camera,
    VideoPlayer,
    StreamingMedia,
    LocalNotifications,
    FCM,
    FileTransfer,
    MediaCapture,
    VideoEditor,
    InAppPurchase,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
