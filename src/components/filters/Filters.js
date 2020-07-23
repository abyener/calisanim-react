import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { Collapse } from 'react-collapse';






export default class Filters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: [
                true, false, false, false, false, false, false, false, false, false, false
            ]
        }

    }

    tabToggle(index) {
        let tabs = this.state.tabs
        tabs[index] = !tabs[index]
        this.setState({
            tabs
        })
    }

    render() {
        return (
            <div>
                <div className="side-navv ">
                    <nav id="sidebar" className="sidebar-wrapper">
                        <div className="sidebar-content">

                            <div className="sidebar-menu">
                                <ul>

                                    <li className="sidebar-dropdown">
                                        <p onClick={() => this.tabToggle(0)}>
                                            <span>Cinsiyet</span>
                                        </p>
                                        <Collapse key="0" isOpened={this.state.tabs[0]}>
                                            <div className="sidebar-submenu" style={{ display: 'block' }}>
                                                <ul>
                                                    <li>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="customRadio1" name="tg-cinsiyet" className="custom-control-input" />
                                                            <label className="custom-control-label" for="customRadio1">Tümü</label>
                                                        </div>

                                                    </li>
                                                    <li>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="tg-cins-bayan" name="tg-cinsiyet" className="custom-control-input" />
                                                            <label className="custom-control-label" for="tg-cins-bayan">Bayan</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="tg-cins-bay" name="tg-cinsiyet" className="custom-control-input" />
                                                            <label className="custom-control-label" for="tg-cins-bay">Bay</label>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </Collapse>
                                    </li>
                                    <li className="sidebar-dropdown">
                                        <p onClick={() => this.tabToggle(1)}>
                                            <span>Referans Durumu</span>
                                        </p>
                                        <Collapse key="1" isOpened={this.state.tabs[1]}>
                                            <div className="sidebar-submenu" >
                                                <ul>
                                                    <li>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="tg-ref-tumu" name="tg-referans" value="tumu" className="custom-control-input" />
                                                            <label className="custom-control-label" for="tg-ref-tumu">Tümü</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="tg-ref-var" name="tg-referans" value="var" className="custom-control-input" />
                                                            <label className="custom-control-label" for="tg-ref-var">Referansı
                                                                    var</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="tg-ref-yok" name="tg-referans" value="yok" className="custom-control-input" />
                                                            <label className="custom-control-label" for="tg-ref-yok">Referansı
                                                                    yok</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Collapse>

                                    </li>
                                    <li className="sidebar-dropdown">
                                        <p onClick={() => this.tabToggle(2)}>
                                            <span>Eğitim Seviyesi</span>
                                        </p>
                                        <Collapse key="2" isOpened={this.state.tabs[2]}>

                                            <div className="sidebar-submenu" >
                                                <ul>
                                                    <li>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="tg-cins-bay" name="tg-egitim" value="Üniversite" className="custom-control-input" />
                                                            <label className="custom-control-label" for="tg-cins-bay">Üniversite</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="tg-cins-bay" name="tg-egitim" value="Lise"  className="custom-control-input" />
                                                            <label className="custom-control-label" for="tg-cins-bay">Lise</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="tg-cins-bay" name="tg-egitim"  value="Ortaokul" className="custom-control-input" />
                                                            <label className="custom-control-label" for="tg-cins-bay">Ortaokul</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="tg-cins-bay" name="tg-egitim" value="İlkokul" className="custom-control-input" />
                                                            <label className="custom-control-label" for="tg-cins-bay">İlkokul</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Collapse>
                                    </li>

                                    <li className="sidebar-dropdown">
                                        <p onClick={() => this.tabToggle(3)}>
                                            <span>Yabancı Dil Bilgisi</span>
                                        </p>
                                        <Collapse key="3" isOpened={this.state.tabs[3]}>

                                            <div className="sidebar-submenu" >
                                                <div className="form-group">
                                                    <select className="selectpicker">
                                                        <option value="-1">Seçiniz...</option>
                                                        <option value="27">İngilizce</option>
                                                        <option value="1">Almanca</option>
                                                        <option value="21">Fransızca</option>
                                                        <option value="58">Türkçe</option>
                                                        <option value="3">Arapça</option>
                                                        <option value="2">Arnavutça</option>
                                                        <option value="4">Azerice</option>
                                                        <option value="5">Belarusça</option>
                                                        <option value="6">Bengali</option>
                                                        <option value="7">Boşnakça</option>
                                                        <option value="9">Bulgarca</option>
                                                        <option value="8">Burma</option>
                                                        <option value="10">Çeçence</option>
                                                        <option value="12">Çekçe</option>
                                                        <option value="11">Çince</option>
                                                        <option value="13">Danca</option>
                                                        <option value="14">Endonezyaca</option>
                                                        <option value="15">Ermenice</option>
                                                        <option value="16">Estonca</option>
                                                        <option value="17">Farsca</option>
                                                        <option value="18">Filipince</option>
                                                        <option value="20">Fince</option>
                                                        <option value="19">Flemence</option>
                                                        <option value="23">Guarani</option>
                                                        <option value="22">Gürcüce</option>
                                                        <option value="24">Hırvatça</option>
                                                        <option value="25">Hintçe</option>
                                                        <option value="26">İbranice</option>
                                                        <option value="28">İrlandaca</option>
                                                        <option value="29">İskoçça</option>
                                                        <option value="55">İspanyolca</option>
                                                        <option value="31">İsveççe</option>
                                                        <option value="30">İtalyanca</option>
                                                        <option value="32">İzlandaca</option>
                                                        <option value="33">Japonca</option>
                                                        <option value="34">Katalanca</option>
                                                        <option value="37">Kazakça</option>
                                                        <option value="35">Kırgızca</option>
                                                        <option value="36">Korece</option>
                                                        <option value="38">Latince</option>
                                                        <option value="39">Lehçe</option>
                                                        <option value="41">Letonyaca</option>
                                                        <option value="40">Litvanca</option>
                                                        <option value="42">Macarca</option>
                                                        <option value="44">Makedonca</option>
                                                        <option value="45">Maltaca</option>
                                                        <option value="46">Moğolca</option>
                                                        <option value="43">Moldovaca</option>
                                                        <option value="47">Norveççe</option>
                                                        <option value="48">Özbekçe</option>
                                                        <option value="49">Portekizce</option>
                                                        <option value="50">Rumence</option>
                                                        <option value="51">Rusça</option>
                                                        <option value="52">Sırpça</option>
                                                        <option value="53">Slovakça</option>
                                                        <option value="54">Slovence</option>
                                                        <option value="56">Tatarca</option>
                                                        <option value="57">Türkmence</option>
                                                        <option value="59">Ukrayna Dili</option>
                                                        <option value="60">Urduca</option>
                                                        <option value="61">Vietnamca</option>
                                                        <option value="62">Yunanca</option>
                                                    </select>

                                                </div>
                                            </div>
                                        </Collapse>
                                    </li>
                                    <li className="sidebar-dropdown">
                                        <p onClick={() => this.tabToggle(4)}>
                                            <span>Yaş Aralığı</span>
                                        </p>
                                        <Collapse key="4" isOpened={this.state.tabs[4]}>

                                            <div className="sidebar-submenu" >
                                                <div className="form-row justify-content-center">
                                                    <div className="form-group col-5" id="yas-ilk">

                                                        <input type="text" className="form-control" id="age-0" data-value="0" placeholder="En az" maxlength="2" />
                                                    </div>

                                                    <div className="form-group col-5">

                                                        <input type="text" className="form-control" id="age-1" data-value="1" placeholder="En fazla" maxlength="2" />
                                                    </div>
                                                </div>

                                            </div>
                                        </Collapse>
                                    </li>
                                    <li className="sidebar-dropdown">
                                        <p onClick={() => this.tabToggle(5)}>
                                            <span>Uyruk</span>
                                        </p>
                                        <Collapse key="5" isOpened={this.state.tabs[5]}>

                                            <div className="sidebar-submenu" >
                                                <div className="form-group">
                                                    <div className="dropdown bootstrap-select"><select className="selectpicker" data-live-search="true" tabindex="-98">
                                                        <option value="TR">Türkiye</option>
                                                        <option value="VI">ABD Virgin Adaları</option>
                                                        <option value="AF">Afganistan</option>
                                                        <option value="AX">Aland Adaları</option>
                                                        <option value="DE">Almanya</option>
                                                        <option value="US">Amerika Birleşik Devletleri</option>
                                                        <option value="UM">Amerika Birleşik Devletleri Küçük Dış
                                                            Adaları
                                                            </option>
                                                        <option value="AS">Amerikan Samoası</option>
                                                        <option value="AD">Andora</option>
                                                        <option value="AO">Angola</option>
                                                        <option value="AI">Anguilla</option>
                                                        <option value="AQ">Antarktika</option>
                                                        <option value="AG">Antigua ve Barbuda</option>
                                                        <option value="AR">Arjantin</option>
                                                        <option value="AL">Arnavutluk</option>
                                                        <option value="AW">Aruba</option>
                                                        <option value="QU">Avrupa Birliği</option>
                                                        <option value="AU">Avustralya</option>
                                                        <option value="AT">Avusturya</option>
                                                        <option value="AZ">Azerbaycan</option>
                                                        <option value="BS">Bahamalar</option>
                                                        <option value="BH">Bahreyn</option>
                                                        <option value="BD">Bangladeş</option>
                                                        <option value="BB">Barbados</option>
                                                        <option value="EH">Batı Sahara</option>
                                                        <option value="BZ">Belize</option>
                                                        <option value="BE">Belçika</option>
                                                        <option value="BJ">Benin</option>
                                                        <option value="BM">Bermuda</option>
                                                        <option value="BY">Beyaz Rusya</option>
                                                        <option value="BT">Bhutan</option>
                                                        <option value="ZZ">Bilinmeyen veya Geçersiz Bölge</option>
                                                        <option value="AE">Birleşik Arap Emirlikleri</option>
                                                        <option value="GB">Birleşik Krallık</option>
                                                        <option value="BO">Bolivya</option>
                                                        <option value="BA">Bosna Hersek</option>
                                                        <option value="BW">Botsvana</option>
                                                        <option value="BV">Bouvet Adası</option>
                                                        <option value="BR">Brezilya</option>
                                                        <option value="BN">Brunei</option>
                                                        <option value="BG">Bulgaristan</option>
                                                        <option value="BF">Burkina Faso</option>
                                                        <option value="BI">Burundi</option>
                                                        <option value="CV">Cape Verde</option>
                                                        <option value="GI">Cebelitarık</option>
                                                        <option value="DZ">Cezayir</option>
                                                        <option value="CX">Christmas Adası</option>
                                                        <option value="DJ">Cibuti</option>
                                                        <option value="CC">Cocos Adaları</option>
                                                        <option value="CK">Cook Adaları</option>
                                                        <option value="TD">Çad</option>
                                                        <option value="CZ">Çek Cumhuriyeti</option>
                                                        <option value="CN">Çin</option>
                                                        <option value="DK">Danimarka</option>
                                                        <option value="DM">Dominik</option>
                                                        <option value="DO">Dominik Cumhuriyeti</option>
                                                        <option value="TL">Doğu Timor</option>
                                                        <option value="EC">Ekvator</option>
                                                        <option value="GQ">Ekvator Ginesi</option>
                                                        <option value="SV">El Salvador</option>
                                                        <option value="ID">Endonezya</option>
                                                        <option value="ER">Eritre</option>
                                                        <option value="AM">Ermenistan</option>
                                                        <option value="EE">Estonya</option>
                                                        <option value="ET">Etiyopya</option>
                                                        <option value="FK">Falkland Adaları (Malvinalar)</option>
                                                        <option value="FO">Faroe Adaları</option>
                                                        <option value="MA">Fas</option>
                                                        <option value="FJ">Fiji</option>
                                                        <option value="CI">Fildişi Sahilleri</option>
                                                        <option value="PH">Filipinler</option>
                                                        <option value="PS">Filistin Bölgesi</option>
                                                        <option value="FI">Finlandiya</option>
                                                        <option value="FR">Fransa</option>
                                                        <option value="GF">Fransız Guyanası</option>
                                                        <option value="TF">Fransız Güney Bölgeleri</option>
                                                        <option value="PF">Fransız Polinezyası</option>
                                                        <option value="GA">Gabon</option>
                                                        <option value="GM">Gambia</option>
                                                        <option value="GH">Gana</option>
                                                        <option value="GN">Gine</option>
                                                        <option value="GW">Gine-Bissau</option>
                                                        <option value="GD">Granada</option>
                                                        <option value="GL">Grönland</option>
                                                        <option value="GP">Guadeloupe</option>
                                                        <option value="GU">Guam</option>
                                                        <option value="GT">Guatemala</option>
                                                        <option value="GG">Guernsey</option>
                                                        <option value="GY">Guyana</option>
                                                        <option value="ZA">Güney Afrika</option>
                                                        <option value="GS">Güney Georgia ve Güney Sandwich Adaları
                                                            </option>
                                                        <option value="KR">Güney Kore</option>
                                                        <option value="CY">Güney Kıbrıs Rum Kesimi</option>
                                                        <option value="GE">Gürcistan</option>
                                                        <option value="HT">Haiti</option>
                                                        <option value="HM">Heard Adası ve McDonald Adaları</option>
                                                        <option value="IN">Hindistan</option>
                                                        <option value="IO">Hint Okyanusu İngiliz Bölgesi</option>
                                                        <option value="NL">Hollanda</option>
                                                        <option value="AN">Hollanda Antilleri</option>
                                                        <option value="HN">Honduras</option>
                                                        <option value="HK">Hong Kong SAR - Çin</option>
                                                        <option value="HR">Hırvatistan</option>
                                                        <option value="IQ">Irak</option>
                                                        <option value="VG">İngiliz Virgin Adaları</option>
                                                        <option value="IR">İran</option>
                                                        <option value="IE">İrlanda</option>
                                                        <option value="ES">İspanya</option>
                                                        <option value="IL">İsrail</option>
                                                        <option value="SE">İsveç</option>
                                                        <option value="CH">İsviçre</option>
                                                        <option value="IT">İtalya</option>
                                                        <option value="IS">İzlanda</option>
                                                        <option value="JM">Jamaika</option>
                                                        <option value="JP">Japonya</option>
                                                        <option value="JE">Jersey</option>
                                                        <option value="KH">Kamboçya</option>
                                                        <option value="CM">Kamerun</option>
                                                        <option value="CA">Kanada</option>
                                                        <option value="ME">Karadağ</option>
                                                        <option value="QA">Katar</option>
                                                        <option value="KY">Kayman Adaları</option>
                                                        <option value="KZ">Kazakistan</option>
                                                        <option value="KE">Kenya</option>
                                                        <option value="KI">Kiribati</option>
                                                        <option value="CO">Kolombiya</option>
                                                        <option value="KM">Komorlar</option>
                                                        <option value="CG">Kongo</option>
                                                        <option value="CD">Kongo Demokratik Cumhuriyeti</option>
                                                        <option value="CR">Kosta Rika</option>
                                                        <option value="KW">Kuveyt</option>
                                                        <option value="KP">Kuzey Kore</option>
                                                        <option value="MP">Kuzey Mariana Adaları</option>
                                                        <option value="CU">Küba</option>
                                                        <option value="KG">Kırgızistan</option>
                                                        <option value="LA">Laos</option>
                                                        <option value="LS">Lesotho</option>
                                                        <option value="LV">Letonya</option>
                                                        <option value="LR">Liberya</option>
                                                        <option value="LY">Libya</option>
                                                        <option value="LI">Liechtenstein</option>
                                                        <option value="LT">Litvanya</option>
                                                        <option value="LB">Lübnan</option>
                                                        <option value="LU">Lüksemburg</option>
                                                        <option value="HU">Macaristan</option>
                                                        <option value="MG">Madagaskar</option>
                                                        <option value="MO">Makao S.A.R. Çin</option>
                                                        <option value="MK">Makedonya</option>
                                                        <option value="MW">Malavi</option>
                                                        <option value="MV">Maldivler</option>
                                                        <option value="MY">Malezya</option>
                                                        <option value="ML">Mali</option>
                                                        <option value="MT">Malta</option>
                                                        <option value="IM">Man Adası</option>
                                                        <option value="MH">Marshall Adaları</option>
                                                        <option value="MQ">Martinik</option>
                                                        <option value="MU">Mauritius</option>
                                                        <option value="YT">Mayotte</option>
                                                        <option value="MX">Meksika</option>
                                                        <option value="FM">Mikronezya Federal Eyaletleri</option>
                                                        <option value="MD">Moldovya Cumhuriyeti</option>
                                                        <option value="MC">Monako</option>
                                                        <option value="MS">Montserrat</option>
                                                        <option value="MR">Moritanya</option>
                                                        <option value="MZ">Mozambik</option>
                                                        <option value="MN">Moğolistan</option>
                                                        <option value="MM">Myanmar</option>
                                                        <option value="EG">Mısır</option>
                                                        <option value="NA">Namibya</option>
                                                        <option value="NR">Nauru</option>
                                                        <option value="NP">Nepal</option>
                                                        <option value="NE">Nijer</option>
                                                        <option value="NG">Nijerya</option>
                                                        <option value="NI">Nikaragua</option>
                                                        <option value="NU">Niue</option>
                                                        <option value="NF">Norfolk Adası</option>
                                                        <option value="NO">Norveç</option>
                                                        <option value="CF">Orta Afrika Cumhuriyeti</option>
                                                        <option value="UZ">Özbekistan</option>
                                                        <option value="PK">Pakistan</option>
                                                        <option value="PW">Palau</option>
                                                        <option value="PA">Panama</option>
                                                        <option value="PG">Papua Yeni Gine</option>
                                                        <option value="PY">Paraguay</option>
                                                        <option value="PE">Peru</option>
                                                        <option value="PN">Pitcairn</option>
                                                        <option value="PL">Polonya</option>
                                                        <option value="PT">Portekiz</option>
                                                        <option value="PR">Porto Riko</option>
                                                        <option value="RE">Reunion</option>
                                                        <option value="RO">Romanya</option>
                                                        <option value="RW">Ruanda</option>
                                                        <option value="RU">Rusya Federasyonu</option>
                                                        <option value="SH">Saint Helena</option>
                                                        <option value="KN">Saint Kitts ve Nevis</option>
                                                        <option value="LC">Saint Lucia</option>
                                                        <option value="PM">Saint Pierre ve Miquelon</option>
                                                        <option value="VC">Saint Vincent ve Grenadinler</option>
                                                        <option value="WS">Samoa</option>
                                                        <option value="SM">San Marino</option>
                                                        <option value="ST">Sao Tome ve Principe</option>
                                                        <option value="SN">Senegal</option>
                                                        <option value="SC">Seyşeller</option>
                                                        <option value="SL">Sierra Leone</option>
                                                        <option value="SG">Singapur</option>
                                                        <option value="SK">Slovakya</option>
                                                        <option value="SI">Slovenya</option>
                                                        <option value="SB">Solomon Adaları</option>
                                                        <option value="SO">Somali</option>
                                                        <option value="LK">Sri Lanka</option>
                                                        <option value="SD">Sudan</option>
                                                        <option value="SR">Surinam</option>
                                                        <option value="SY">Suriye</option>
                                                        <option value="SA">Suudi Arabistan</option>
                                                        <option value="SJ">Svalbard ve Jan Mayen</option>
                                                        <option value="SZ">Svaziland</option>
                                                        <option value="RS">Sırbistan</option>
                                                        <option value="CS">Sırbistan-Karadağ</option>
                                                        <option value="CL">Şili</option>
                                                        <option value="TJ">Tacikistan</option>
                                                        <option value="TZ">Tanzanya</option>
                                                        <option value="TH">Tayland</option>
                                                        <option value="TW">Tayvan</option>
                                                        <option value="TG">Togo</option>
                                                        <option value="TK">Tokelau</option>
                                                        <option value="TO">Tonga</option>
                                                        <option value="TT">Trinidad ve Tobago</option>
                                                        <option value="TN">Tunus</option>
                                                        <option value="TC">Turks ve Caicos Adaları</option>
                                                        <option value="TV">Tuvalu</option>
                                                        <option value="TM">Türkmenistan</option>
                                                        <option value="UG">Uganda</option>
                                                        <option value="UA">Ukrayna</option>
                                                        <option value="OM">Umman</option>
                                                        <option value="UY">Uruguay</option>
                                                        <option value="QO">Uzak Okyanusya</option>
                                                        <option value="JO">Ürdün</option>
                                                        <option value="VU">Vanuatu</option>
                                                        <option value="VA">Vatikan</option>
                                                        <option value="VE">Venezuela</option>
                                                        <option value="VN">Vietnam</option>
                                                        <option value="WF">Wallis ve Futuna</option>
                                                        <option value="YE">Yemen</option>
                                                        <option value="NC">Yeni Kaledonya</option>
                                                        <option value="NZ">Yeni Zelanda</option>
                                                        <option value="GR">Yunanistan</option>
                                                        <option value="ZM">Zambiya</option>
                                                        <option value="ZW">Zimbabve</option>
                                                    </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </Collapse>
                                    </li>
                                    <li className="sidebar-dropdown">
                                        <p onClick={() => this.tabToggle(6)}>
                                            <span>Tercih Bilgileri</span>
                                        </p>
                                        <Collapse key="6" isOpened={this.state.tabs[6]}>

                                            <div className="sidebar-submenu" >
                                                <ul>
                                                    <li>
                                                        <div className="custom-control custom-checkbox ">
                                                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                            <label className="custom-control-label" for="customControlInline">Aracı
                                                                    olan</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="custom-control custom-checkbox ">
                                                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                            <label className="custom-control-label" for="customControlInline">Sigara
                                                                    kullanmayan</label>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </Collapse>
                                    </li>
                                    <li className="sidebar-dropdown">
                                        <p onClick={() => this.tabToggle(7)}>
                                            <span>Özellikler</span>
                                        </p>
                                        <Collapse key="7" isOpened={this.state.tabs[7]}>

                                            <div className="sidebar-submenu" >
                                                <ul>
                                                    <li>
                                                        <div className="custom-control custom-checkbox ">
                                                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                            <label className="custom-control-label" for="customControlInline">Temizlik
                                                                    yapabilen</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="custom-control custom-checkbox ">
                                                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                            <label className="custom-control-label" for="customControlInline">Temizlik
                                                                    yapabilen</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="custom-control custom-checkbox ">
                                                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                            <label className="custom-control-label" for="customControlInline">Temizlik
                                                                    yapabilen</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Collapse>
                                    </li>
                                    <li className="sidebar-dropdown">
                                        <p onClick={() => this.tabToggle(10)}>
                                            <span>Tecrübe</span>
                                        </p>
                                        <Collapse key="10" isOpened={this.state.tabs[10]}>
                                            <div className="sidebar-submenu" >
                                                <div className="form-group">
                                                    <select className="custom-select">
                                                        <option value="-1">Seçiniz...</option>
                                                        <option value="11">1 yıldan az</option>
                                                        <option value="1">1 Yıl</option>
                                                        <option value="2">2 Yıl</option>
                                                        <option value="3">3 Yıl</option>
                                                        <option value="4">4 Yıl</option>
                                                        <option value="5">5+ Yıl</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </Collapse>
                                    </li>
                                    <li className="sidebar-dropdown">
                                        <p onClick={() => this.tabToggle(8)}>
                                            <span>Fiyat Aralığı</span>
                                        </p>
                                        <Collapse key="8" isOpened={this.state.tabs[8]}>

                                            <div className="sidebar-submenu" >

                                            </div>
                                        </Collapse>
                                    </li>
                                    <li className="sidebar-dropdown">
                                        <p onClick={() => this.tabToggle(9)}>
                                            <span>Medeni Durum</span>
                                        </p>
                                        <Collapse key="9" isOpened={this.state.tabs[9]}>

                                            <div className="sidebar-submenu" >
                                                <ul>
                                                    <li>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="tg-cins-bay" name="tg-cinsiyet" className="custom-control-input" />
                                                            <label className="custom-control-label" for="tg-cins-bay">Tümü</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="tg-cins-bay" name="tg-cinsiyet" className="custom-control-input" />
                                                            <label className="custom-control-label" for="tg-cins-bay">Bekar</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" id="tg-cins-bay" name="tg-cinsiyet" className="custom-control-input" />
                                                            <label className="custom-control-label" for="tg-cins-bay">Evli</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Collapse>
                                    </li>

                                </ul>
                                <div className="sidebar-footer">
                                    <button type="submit" className="btn btn-primary btn-sb">Filtrele</button>
                                </div>
                            </div>

                        </div>
                    </nav>
                </div>
            </div>
        )
    }


}
