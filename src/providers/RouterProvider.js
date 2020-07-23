import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Index from '../pages/index';
import UyeGiris from '../pages/uyegiris';
import UyeOl from '../pages/uyeol';
import Islerim from '../pages/islerim';
import Ilanlarim from '../pages/ilanlarim';
import Odemelerim from '../pages/odemelerim';
import Ilanlar from '../pages/ilanlar';
import SSS from '../pages/sss';
import Iletisim from '../pages/iletisim';
import UyelikPlanlari from '../pages/uyelik-planlari';
import UyelikBilgileri from '../pages/uyelik-bilgileri';
import Teklif from '../pages/teklif';
import Odeme from '../pages/odeme';
import IsverenProfil from '../pages/isveren-profil';
import IsverenProfilGuncelle from '../pages/isveren-profil-guncelle';
import IsDetay from '../pages/isdetay';
import IlanDuzenle from '../pages/ilanduzenle';
import Chat from '../pages/chat';
import FindEmployee from '../pages/calisanbul';
import IlanDetay from "../pages/ilandetay"
import CalisanProfil from '../pages/calisan-profil';
import CalisanProfilGuncelle from '../pages/calisan-profil-guncelle';
import AjansProfil from '../pages/ajans-profil';
import AjansProfilGuncelle from '../pages/ajans-profil-guncelle';

function RouterProvider() {
  return (
    <Router>
      <Switch>
        <Route path="/uyeol">
          <UyeOl />
        </Route>
        <Route path="/uyegiris">
          <UyeGiris />
        </Route>
        <Route path="/islerim">
          <Islerim />
        </Route>
        <Route path="/ilanlarim">
          <Ilanlarim />
        </Route>
        <Route path="/odemelerim">
          <Odemelerim />
        </Route>
        <Route path="/ilanlar">
          <Ilanlar />
        </Route>
        <Route path="/sss">
          <SSS />
        </Route>
        <Route path="/iletisim">
          <Iletisim />
        </Route>
        <Route path="/uyelik-planlari">
          <UyelikPlanlari />
        </Route>
        <Route path="/uyelik-bilgileri">
          <UyelikBilgileri />
        </Route>
        <Route path="/teklif">
          <Teklif />
        </Route>
        <Route path="/odeme">
          <Odeme />
        </Route>
        <Route path="/isveren-profil/:id" component={IsverenProfil} />
        <Route path="/isveren-profil-guncelle">
          <IsverenProfilGuncelle />
        </Route>
        <Route path="/isdetay">
          <IsDetay />
        </Route>
        <Route path="/ilanduzenle">
          <IlanDuzenle />
        </Route>
        <Route path="/ilandetay">
          <IlanDetay />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/calisanbul">
          <FindEmployee />
        </Route>
        <Route path="/calisan-profil/:id" component={IsverenProfil}/>
        <Route path="/calisan-profil-guncelle">
          <CalisanProfilGuncelle />
        </Route>
        <Route path="/ajans-profil">
          <AjansProfil />
        </Route>
        <Route path="/ajans-profil-guncelle">
          <AjansProfilGuncelle />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default RouterProvider;
