import { Component } from '@angular/core';
import { LoadingController, ToastController, AlertController, NavController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private loadingctrl: LoadingController, private toastctrl: ToastController,
    private alertctrl: AlertController, private navctrl: NavController) {

  }

  async showLoading() {
    let loading = await this.loadingctrl.create({
      message: 'Loading...',
      showBackdrop: false,
      spinner: 'dots'
    });
    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000)
  }

  async showToast() {
    let toast = await this.toastctrl.create({
      message: 'Toast Notification',
      duration: 5000,
      color: 'dark',
      showCloseButton: true,
      closeButtonText: 'X',
      position: 'bottom'
    });
    toast.present();

  }

  async showAlert() {
    let alert = await this.alertctrl.create({
      header: 'Are you sure?',
      subHeader: 'This cannot be undone',
      message: 'Are you really sure means a 101% sure afterwards dont blame me',
      inputs:[{
        name: 'Username',
        type: 'text',
        placeholder: 'Kimi no wa'
      },{
        name: 'E-mail',
        type: 'email',
        placeholder: 'example@xyz.com'
      }],
      buttons: [{
        text: 'Cancel',
        handler: () => {

        }
      }, {
        text: 'Delete',
        handler: (data) => {
          console.log(data)
        }
      }]

    })

    alert.present();
  }

  gotooffice() {
    this.navctrl.navigateForward('/office/1234')
  }

}
