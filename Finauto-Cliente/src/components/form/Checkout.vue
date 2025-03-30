<template>
  <div class="container-xxl">
    <!--begin::Content-->
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
      <!--begin::Entry-->
      <div class="d-flex flex-column-fluid">
        <!--begin::Container-->
        <div class="container">
          <div
            class="d-flex justify-content-between pb-10 pb-md-20 flex-column flex-md-row"
          >
            <div class="d-flex flex-column align-items-md-end px-0">
              <!--begin::Logo-->
              <router-link to="/" class="mb-5">
                <img src="/images/Logo finauto 2022.png" alt="Logo" />
              </router-link>
            </div>
            <h1 class="display-4 font-weight-boldest mb-10">Checkout</h1>
          </div>
          <!--begin::Page Layout-->
          <div class="d-flex flex-row">
            <!--begin::Layout-->
            <div class="flex-row-fluid ml-lg-8">
              <!--begin::Section-->
              <div class="card border-secondary card-custom card-transparent">
                <div class="card-body p-0">
                  <div
                    class="row justify-content-center py-8 px-8 py-lg-15 px-lg-10"
                  >
                    <div class="col-xl-12 col-xxl-12">
                      <form
                        class="form mt-0 mt-lg-10"
                        id="kt_form"
                        @submit.prevent="submitForm"
                      >
                        <!--begin: Wizard Step 1-->
                        <div
                          class="pb-5"
                          data-wizard-type="step-content"
                          data-wizard-state="current"
                        >
                          <h4 class="mb-10 font-weight-bold text-dark">
                            Datos Personales
                          </h4>

                          <div class="row">
                            <div class="col-md-6">
                              <!--begin::Input-->
                              <div class="form-group">
                                <label>Nombre</label>
                                <span class="text-danger">*</span>
                                <input
                                  type="text"
                                  class="form-control form-control-solid form-control-lg"
                                  name="name"
                                  placeholder="Name"
                                  :class="{
                                    'is-invalid': submitted && !formData.name,
                                  }"
                                  v-model="formData.name"
                                  required
                                />

                                <div class="invalid-feedback">
                                  Este campo es obligatorio
                                </div>

                                <span class="form-text text-muted"
                                  >Entre su Nombre.</span
                                >
                              </div>
                              <!--begin::Input-->
                            </div>
                            <div class="col-md-6">
                              <!--begin::Input-->
                              <div class="form-group">
                                <label>Apellidos</label>
                                <span class="text-danger">*</span>
                                <input
                                  type="text"
                                  class="form-control form-control-solid form-control-lg"
                                  name="lastname"
                                  placeholder="Apellidos"
                                  :class="{
                                    'is-invalid':
                                      submitted && !formData.lastname,
                                  }"
                                  v-model="formData.lastname"
                                  required
                                />
                                <div class="invalid-feedback">
                                  Este campo es obligatorio
                                </div>
                                <span class="form-text text-muted"
                                  >Entre sus Apellidos.</span
                                >
                              </div>
                              <!--end::Input-->
                            </div>
                          </div>

                          <!--end::Input-->

                          <div class="row">
                            <div class="col-md-6">
                              <!--begin::Input-->
                              <div class="form-group">
                                <label>Número de Identificación</label>
                                <input
                                  type="text"
                                  class="form-control form-control-solid form-control-lg"
                                  name="identification"
                                  placeholder="Número de Identificación"
                                  value=""
                                  :class="{
                                    'is-invalid':
                                      submitted && !formData.identification,
                                  }"
                                  v-model="formData.identification"
                                  required
                                />

                                <div class="invalid-feedback">
                                  Este campo es obligatorio
                                </div>
                                <span class="form-text text-muted"
                                  >Entre su Número de
                                  Identificación(CI,Pasaporte,DNI).</span
                                >
                              </div>
                              <!--end::Input-->
                            </div>
                            <div class="col-md-6">
                              <!--begin::Select-->
                              <div class="form-group">
                                <label>País</label>
                                <select
                                  name="country"
                                  class="form-control seleccion form-control-solid form-control-lg"
                                >
                                  <option value="">Select</option>
                                  <option value="AF">Afghanistan</option>
                                  <option value="AX">Åland Islands</option>
                                  <option value="AL">Albania</option>
                                  <option value="DZ">Algeria</option>
                                  <option value="AS">American Samoa</option>
                                  <option value="AD">Andorra</option>
                                  <option value="AO">Angola</option>
                                  <option value="AI">Anguilla</option>
                                  <option value="AQ">Antarctica</option>
                                  <option value="AG">
                                    Antigua and Barbuda
                                  </option>
                                  <option value="AR">Argentina</option>
                                  <option value="AM">Armenia</option>
                                  <option value="AW">Aruba</option>
                                  <option value="AU" selected="selected">
                                    Australia
                                  </option>
                                  <option value="AT">Austria</option>
                                  <option value="AZ">Azerbaijan</option>
                                  <option value="BS">Bahamas</option>
                                  <option value="BH">Bahrain</option>
                                  <option value="BD">Bangladesh</option>
                                  <option value="BB">Barbados</option>
                                  <option value="BY">Belarus</option>
                                  <option value="BE">Belgium</option>
                                  <option value="BZ">Belize</option>
                                  <option value="BJ">Benin</option>
                                  <option value="BM">Bermuda</option>
                                  <option value="BT">Bhutan</option>
                                  <option value="BO">
                                    Bolivia, Plurinational State of
                                  </option>
                                  <option value="BQ">
                                    Bonaire, Sint Eustatius and Saba
                                  </option>
                                  <option value="BA">
                                    Bosnia and Herzegovina
                                  </option>
                                  <option value="BW">Botswana</option>
                                  <option value="BV">Bouvet Island</option>
                                  <option value="BR">Brazil</option>
                                  <option value="IO">
                                    British Indian Ocean Territory
                                  </option>
                                  <option value="BN">Brunei Darussalam</option>
                                  <option value="BG">Bulgaria</option>
                                  <option value="BF">Burkina Faso</option>
                                  <option value="BI">Burundi</option>
                                  <option value="KH">Cambodia</option>
                                  <option value="CM">Cameroon</option>
                                  <option value="CA">Canada</option>
                                  <option value="CV">Cape Verde</option>
                                  <option value="KY">Cayman Islands</option>
                                  <option value="CF">
                                    Central African Republic
                                  </option>
                                  <option value="TD">Chad</option>
                                  <option value="CL">Chile</option>
                                  <option value="CN">China</option>
                                  <option value="CX">Christmas Island</option>
                                  <option value="CC">
                                    Cocos (Keeling) Islands
                                  </option>
                                  <option value="CO">Colombia</option>
                                  <option value="KM">Comoros</option>
                                  <option value="CG">Congo</option>
                                  <option value="CD">
                                    Congo, the Democratic Republic of the
                                  </option>
                                  <option value="CK">Cook Islands</option>
                                  <option value="CR">Costa Rica</option>
                                  <option value="CI">Côte d'Ivoire</option>
                                  <option value="HR">Croatia</option>
                                  <option value="CU">Cuba</option>
                                  <option value="CW">Curaçao</option>
                                  <option value="CY">Cyprus</option>
                                  <option value="CZ">Czech Republic</option>
                                  <option value="DK">Denmark</option>
                                  <option value="DJ">Djibouti</option>
                                  <option value="DM">Dominica</option>
                                  <option value="DO">Dominican Republic</option>
                                  <option value="EC">Ecuador</option>
                                  <option value="EG">Egypt</option>
                                  <option value="SV">El Salvador</option>
                                  <option value="GQ">Equatorial Guinea</option>
                                  <option value="ER">Eritrea</option>
                                  <option value="EE">Estonia</option>
                                  <option value="ET">Ethiopia</option>
                                  <option value="FK">
                                    Falkland Islands (Malvinas)
                                  </option>
                                  <option value="FO">Faroe Islands</option>
                                  <option value="FJ">Fiji</option>
                                  <option value="FI">Finland</option>
                                  <option value="FR">France</option>
                                  <option value="GF">French Guiana</option>
                                  <option value="PF">French Polynesia</option>
                                  <option value="TF">
                                    French Southern Territories
                                  </option>
                                  <option value="GA">Gabon</option>
                                  <option value="GM">Gambia</option>
                                  <option value="GE">Georgia</option>
                                  <option value="DE">Germany</option>
                                  <option value="GH">Ghana</option>
                                  <option value="GI">Gibraltar</option>
                                  <option value="GR">Greece</option>
                                  <option value="GL">Greenland</option>
                                  <option value="GD">Grenada</option>
                                  <option value="GP">Guadeloupe</option>
                                  <option value="GU">Guam</option>
                                  <option value="GT">Guatemala</option>
                                  <option value="GG">Guernsey</option>
                                  <option value="GN">Guinea</option>
                                  <option value="GW">Guinea-Bissau</option>
                                  <option value="GY">Guyana</option>
                                  <option value="HT">Haiti</option>
                                  <option value="HM">
                                    Heard Island and McDonald Islands
                                  </option>
                                  <option value="VA">
                                    Holy See (Vatican City State)
                                  </option>
                                  <option value="HN">Honduras</option>
                                  <option value="HK">Hong Kong</option>
                                  <option value="HU">Hungary</option>
                                  <option value="IS">Iceland</option>
                                  <option value="IN">India</option>
                                  <option value="ID">Indonesia</option>
                                  <option value="IR">
                                    Iran, Islamic Republic of
                                  </option>
                                  <option value="IQ">Iraq</option>
                                  <option value="IE">Ireland</option>
                                  <option value="IM">Isle of Man</option>
                                  <option value="IL">Israel</option>
                                  <option value="IT">Italy</option>
                                  <option value="JM">Jamaica</option>
                                  <option value="JP">Japan</option>
                                  <option value="JE">Jersey</option>
                                  <option value="JO">Jordan</option>
                                  <option value="KZ">Kazakhstan</option>
                                  <option value="KE">Kenya</option>
                                  <option value="KI">Kiribati</option>
                                  <option value="KP">
                                    Korea, Democratic People's Republic of
                                  </option>
                                  <option value="KR">Korea, Republic of</option>
                                  <option value="KW">Kuwait</option>
                                  <option value="KG">Kyrgyzstan</option>
                                  <option value="LA">
                                    Lao People's Democratic Republic
                                  </option>
                                  <option value="LV">Latvia</option>
                                  <option value="LB">Lebanon</option>
                                  <option value="LS">Lesotho</option>
                                  <option value="LR">Liberia</option>
                                  <option value="LY">Libya</option>
                                  <option value="LI">Liechtenstein</option>
                                  <option value="LT">Lithuania</option>
                                  <option value="LU">Luxembourg</option>
                                  <option value="MO">Macao</option>
                                  <option value="MK">
                                    Macedonia, the former Yugoslav Republic of
                                  </option>
                                  <option value="MG">Madagascar</option>
                                  <option value="MW">Malawi</option>
                                  <option value="MY">Malaysia</option>
                                  <option value="MV">Maldives</option>
                                  <option value="ML">Mali</option>
                                  <option value="MT">Malta</option>
                                  <option value="MH">Marshall Islands</option>
                                  <option value="MQ">Martinique</option>
                                  <option value="MR">Mauritania</option>
                                  <option value="MU">Mauritius</option>
                                  <option value="YT">Mayotte</option>
                                  <option value="MX">Mexico</option>
                                  <option value="FM">
                                    Micronesia, Federated States of
                                  </option>
                                  <option value="MD">
                                    Moldova, Republic of
                                  </option>
                                  <option value="MC">Monaco</option>
                                  <option value="MN">Mongolia</option>
                                  <option value="ME">Montenegro</option>
                                  <option value="MS">Montserrat</option>
                                  <option value="MA">Morocco</option>
                                  <option value="MZ">Mozambique</option>
                                  <option value="MM">Myanmar</option>
                                  <option value="NA">Namibia</option>
                                  <option value="NR">Nauru</option>
                                  <option value="NP">Nepal</option>
                                  <option value="NL">Netherlands</option>
                                  <option value="NC">New Caledonia</option>
                                  <option value="NZ">New Zealand</option>
                                  <option value="NI">Nicaragua</option>
                                  <option value="NE">Niger</option>
                                  <option value="NG">Nigeria</option>
                                  <option value="NU">Niue</option>
                                  <option value="NF">Norfolk Island</option>
                                  <option value="MP">
                                    Northern Mariana Islands
                                  </option>
                                  <option value="NO">Norway</option>
                                  <option value="OM">Oman</option>
                                  <option value="PK">Pakistan</option>
                                  <option value="PW">Palau</option>
                                  <option value="PS">
                                    Palestinian Territory, Occupied
                                  </option>
                                  <option value="PA">Panama</option>
                                  <option value="PG">Papua New Guinea</option>
                                  <option value="PY">Paraguay</option>
                                  <option value="PE">Peru</option>
                                  <option value="PH">Philippines</option>
                                  <option value="PN">Pitcairn</option>
                                  <option value="PL">Poland</option>
                                  <option value="PT">Portugal</option>
                                  <option value="PR">Puerto Rico</option>
                                  <option value="QA">Qatar</option>
                                  <option value="RE">Réunion</option>
                                  <option value="RO">Romania</option>
                                  <option value="RU">Russian Federation</option>
                                  <option value="RW">Rwanda</option>
                                  <option value="BL">Saint Barthélemy</option>
                                  <option value="SH">
                                    Saint Helena, Ascension and Tristan da Cunha
                                  </option>
                                  <option value="KN">
                                    Saint Kitts and Nevis
                                  </option>
                                  <option value="LC">Saint Lucia</option>
                                  <option value="MF">
                                    Saint Martin (French part)
                                  </option>
                                  <option value="PM">
                                    Saint Pierre and Miquelon
                                  </option>
                                  <option value="VC">
                                    Saint Vincent and the Grenadines
                                  </option>
                                  <option value="WS">Samoa</option>
                                  <option value="SM">San Marino</option>
                                  <option value="ST">
                                    Sao Tome and Principe
                                  </option>
                                  <option value="SA">Saudi Arabia</option>
                                  <option value="SN">Senegal</option>
                                  <option value="RS">Serbia</option>
                                  <option value="SC">Seychelles</option>
                                  <option value="SL">Sierra Leone</option>
                                  <option value="SG">Singapore</option>
                                  <option value="SX">
                                    Sint Maarten (Dutch part)
                                  </option>
                                  <option value="SK">Slovakia</option>
                                  <option value="SI">Slovenia</option>
                                  <option value="SB">Solomon Islands</option>
                                  <option value="SO">Somalia</option>
                                  <option value="ZA">South Africa</option>
                                  <option value="GS">
                                    South Georgia and the South Sandwich Islands
                                  </option>
                                  <option value="SS">South Sudan</option>
                                  <option value="ES">Spain</option>
                                  <option value="LK">Sri Lanka</option>
                                  <option value="SD">Sudan</option>
                                  <option value="SR">Suriname</option>
                                  <option value="SJ">
                                    Svalbard and Jan Mayen
                                  </option>
                                  <option value="SZ">Swaziland</option>
                                  <option value="SE">Sweden</option>
                                  <option value="CH">Switzerland</option>
                                  <option value="SY">
                                    Syrian Arab Republic
                                  </option>
                                  <option value="TW">
                                    Taiwan, Province of China
                                  </option>
                                  <option value="TJ">Tajikistan</option>
                                  <option value="TZ">
                                    Tanzania, United Republic of
                                  </option>
                                  <option value="TH">Thailand</option>
                                  <option value="TL">Timor-Leste</option>
                                  <option value="TG">Togo</option>
                                  <option value="TK">Tokelau</option>
                                  <option value="TO">Tonga</option>
                                  <option value="TT">
                                    Trinidad and Tobago
                                  </option>
                                  <option value="TN">Tunisia</option>
                                  <option value="TR">Turkey</option>
                                  <option value="TM">Turkmenistan</option>
                                  <option value="TC">
                                    Turks and Caicos Islands
                                  </option>
                                  <option value="TV">Tuvalu</option>
                                  <option value="UG">Uganda</option>
                                  <option value="UA">Ukraine</option>
                                  <option value="AE">
                                    United Arab Emirates
                                  </option>
                                  <option value="GB">United Kingdom</option>
                                  <option value="US">United States</option>
                                  <option value="UM">
                                    United States Minor Outlying Islands
                                  </option>
                                  <option value="UY">Uruguay</option>
                                  <option value="UZ">Uzbekistan</option>
                                  <option value="VU">Vanuatu</option>
                                  <option value="VE">
                                    Venezuela, Bolivarian Republic of
                                  </option>
                                  <option value="VN">Viet Nam</option>
                                  <option value="VG">
                                    Virgin Islands, British
                                  </option>
                                  <option value="VI">
                                    Virgin Islands, U.S.
                                  </option>
                                  <option value="WF">Wallis and Futuna</option>
                                  <option value="EH">Western Sahara</option>
                                  <option value="YE">Yemen</option>
                                  <option value="ZM">Zambia</option>
                                  <option value="ZW">Zimbabwe</option>
                                </select>
                              </div>
                              <!--end::Select-->
                            </div>
                          </div>
                        </div>
                        <!--end: Wizard Step 1-->
                        <!--begin: Wizard Step 2-->
                        <div class="pb-5" data-wizard-type="step-content">
                          <h4 class="mb-10 font-weight-bold text-dark">
                            Formas de Contacto
                          </h4>
                          <div class="row">
                            <div class="col-md-6">
                              <!--begin::Input-->
                              <div class="form-group">
                                <label>Número de Teléfono</label>
                                <input
                                  type="number"
                                  class="form-control form-control-solid form-control-lg"
                                  name="phone"
                                  placeholder="Telefono"
                                  value=""
                                />
                                <span class="form-text text-muted"
                                  >Entre su número de teléfono.</span
                                >
                              </div>
                              <!--end::Input-->
                            </div>
                            <div class="col-md-6">
                              <!--begin::Input-->
                              <div class="form-group">
                                <label>Correo Electrónico</label>
                                <input
                                  type="email"
                                  class="form-control form-control-solid form-control-lg"
                                  name="email"
                                  placeholder="Email"
                                  value=""
                                />
                                <span class="form-text text-muted"
                                  >Entre su Correo Electrónico.</span
                                >
                              </div>
                              <!--end::Input-->
                            </div>
                          </div>
                        </div>
                        <!--end: Wizard Step 2-->
                        <!--begin: Wizard Step 3-->
                        <div class="pb-5" data-wizard-type="step-content">
                          <!--begin::Section-->
                          <h4 class="mb-10 font-weight-bold text-dark">
                            Revisar su pedido y enviarlo
                          </h4>

                          <div class="separator separator-dashed my-5"></div>
                          <!--end::Section-->
                          <!--begin::Section-->
                          <h6 class="font-weight-bolder mb-3">
                            Detalles de la Orden:
                          </h6>
                          <!-- <div class="text-dark-50 line-height-lg">
                            <div class="table-responsive">
                              <table class="table">
                                <thead>
                                  <tr>
                                    <th
                                      class="pl-0 font-weight-bold text-muted text-uppercase"
                                    >
                                      Articulos Pedidos
                                    </th>
                                    <th
                                      class="text-left font-weight-bold text-muted text-uppercase"
                                    >
                                      Cantidad
                                    </th>
                                    <th
                                      class="text-left font-weight-bold text-muted text-uppercase"
                                    >
                                      Precio Unitario
                                    </th>
                                    <th
                                      class="text-left font-weight-bold pr-0 text-muted text-uppercase"
                                    >
                                      Total
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    v-for="item in cart"
                                    :key="item.id"
                                    class="font-weight-boldest"
                                  >
                                    <td
                                      class="border-0 pl-0 pt-7 pr-0 d-flex align-items-center"
                                    >
                                    
                                      <div class="flex-shrink-0 imagencheck">
                                        <img
                                          :src="item.card.imagen[0]"
                                          alt=""
                                          style="width: 80px; height: 80px"
                                        />
                                        <h5 class="nombrecheck">
                                          {{ item.card.nombre }}
                                        </h5>
                                      </div>
                                     
                                    </td>
                                    <td
                                      class="text-left pt-7 align-middle cantidadcheck"
                                    >
                                      {{ item.quantity }}
                                    </td>
                                    <td
                                      class="text-left pt-7 px-0 align-middle"
                                    >
                                      {{ item.card.precio }}
                                    </td>
                                    <td
                                      class="text-primary pt-7 px-0 text-left align-middle preciocheck"
                                    >
                                      ${{
                                        (
                                          item.card.precio * item.quantity
                                        ).toFixed(2)
                                      }}
                                    </td>
                                  </tr>

                                  <tr>
                                    <td colspan="2" class="border-0 pt-0"></td>
                                    <td
                                      class="border-0 pt-0 font-weight-bolder font-size-h5 text-left"
                                    >
                                      Total
                                    </td>
                                    <td
                                      class="border-0 pt-0 px-0 font-weight-bolder font-size-h5 text-success text-left totalcheck"
                                    >
                                      ${{ totalPrice }}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div> -->

                          <div class="text-dark-50 line-height-lg">
                            <!-- Clase table-responsive para permitir desplazamiento horizontal 
         en pantallas muy pequeñas si la tabla se desborda -->
                            <div class="table-responsive">
                              <table class="table align-middle">
                                <!-- Encabezado de la tabla -->
                                <thead>
                                  <tr>
                                    <th
                                      class="border-0 text-muted text-uppercase"
                                    >
                                      Artículos Pedidos
                                    </th>
                                    <th
                                      class="border-0 text-center text-muted text-uppercase"
                                    >
                                      Cantidad
                                    </th>
                                    <th
                                      class="border-0 text-center text-muted text-uppercase"
                                    >
                                      Precio Unitario
                                    </th>
                                    <th
                                      class="border-0 text-center text-muted text-uppercase"
                                    >
                                      Total
                                    </th>
                                  </tr>
                                </thead>

                                <!-- Cuerpo de la tabla -->
                                <tbody>
                                  <tr v-for="item in cart" :key="item.id">
                                    <!-- Artículo: imagen y nombre -->
                                    <td class="border-0">
                                      <!-- Usamos flex para organizar la imagen y el nombre
                   En pantallas pequeñas se apilan (columna), 
                   en pantallas >=576px se ponen en fila -->
                                      <div
                                        class="d-flex flex-column flex-sm-row align-items-start align-items-sm-center"
                                      >
                                        <img
                                          :src="item.card.imagen[0]"
                                          alt="Imagen del producto"
                                          class="img-fluid mb-2 mb-sm-0 me-sm-3"
                                          style="
                                            width: 80px;
                                            height: 80px;
                                            object-fit: cover;
                                          "
                                        />
                                        <span>{{ item.card.nombre }}</span>
                                      </div>
                                    </td>

                                    <!-- Cantidad -->
                                    <td class="border-0 text-center">
                                      {{ item.quantity }}
                                    </td>

                                    <!-- Precio unitario -->
                                    <td class="border-0 text-center">
                                      ${{ item.card.precio.toFixed(2) }}
                                    </td>

                                    <!-- Total por artículo (cantidad * precio unitario) -->
                                    <td
                                      class="border-0 text-center text-primary fw-bold"
                                    >
                                      ${{
                                        (
                                          item.card.precio * item.quantity
                                        ).toFixed(2)
                                      }}
                                    </td>
                                  </tr>

                                  <!-- Fila de total general -->
                                  <tr>
                                    <!-- Espacios vacíos para alinear el texto del total a la derecha -->
                                    <td colspan="2" class="border-0"></td>
                                    <td class="border-0 text-end fw-bold">
                                      Total
                                    </td>
                                    <td
                                      class="border-0 text-center text-success fw-bold"
                                    >
                                      ${{ totalPrice }}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div class="separator separator-dashed my-5"></div>
                          <!--end::Section-->
                        </div>
                        <!--end: Wizard Step 3-->
                        <!--begin: Wizard Actions-->
                        <div
                          class="d-flex justify-content-between border-top mt-5 pt-10"
                        >
                          <div class="mr-2">
                            <router-link
                              to="/shop_cart"
                              type="button"
                              class="btn btn-light-primary font-weight-bolder text-uppercase px-9 py-4"
                              data-wizard-type="action-prev"
                            >
                              Previous
                            </router-link>
                          </div>
                          <div>
                            <button
                              type="button"
                              class="btn btn-success font-weight-bolder text-uppercase px-9 py-4"
                              data-wizard-type="action-submit"
                              @click="submitForm"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                        <!--end: Wizard Actions-->
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--end::Layout-->
          </div>
          <!--end::Page Layout-->
        </div>
        <!--end::Container-->
      </div>
      <!--end::Entry-->
    </div>
    <!--end::Content-->
  </div>
</template>

<script setup>
  import { ref, computed } from "vue";
  import { useStore } from "vuex";
  import axios from "axios";

  const store = useStore();
  const cart = ref(store.state.cart);
  const formData = ref({
    name: "",
    lastname: "",
    identification: "",
    country: "",
    phone: "",
    email: "",
  });
  const submitted = ref(false);

  const totalPrice = computed(() => {
    return cart.value
      .reduce((total, item) => total + item.card.precio * item.quantity, 0)
      .toFixed(2);
  });

  // Nueva función para manejar el envío del formulario
  const submitForm = async () => {
    submitted.value = true;
    const formDataObj = new FormData(document.getElementById("kt_form"));

    // Validación de campos obligatorios
    const requiredFields = [
      "name",
      "lastname",
      "identification",
      "country",
      "phone",
      "email",
    ];
    for (const field of requiredFields) {
      if (!formDataObj.get(field)) {
        console.error(`El campo ${field} es obligatorio.`);
        return; // Detiene el envío si falta algún campo obligatorio
      }
    }

    try {
      const response = await axios.post("/api/checkout", formDataObj); // Cambia la URL según tu API
      console.log("Formulario enviado con éxito:", response.data);
      // Aquí puedes manejar la respuesta, como redirigir al usuario o mostrar un mensaje
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      // Maneja el error, por ejemplo, mostrando un mensaje al usuario
    }
  };
</script>

<style scoped>
  @import "../../assets/styles/wizard-4.css";
  @import "../../assets/styles/style.bundle.css";

  .is-invalid {
    border-color: red; /* Cambia el color del borde para resaltar el campo */
  }
  .form-group {
    width: 83% !important;
  }
  .card.card-custom {
    box-shadow: 0px 0px 30px 0px rgba(82, 63, 105, 0.11) !important;
  }
  @media (max-width: 414px) {
    .form-group {
      width: 65% !important;
    }
  }
  @media (max-width: 520px) {
    .nombrecheck {
      width: min-content;
    }
    .cantidadcheck {
      padding: 0px 0px;
    }
  }

  @media (max-width: 480px) {
    .nombrecheck {
      padding: 0px 0px;
    }
  }
</style>
