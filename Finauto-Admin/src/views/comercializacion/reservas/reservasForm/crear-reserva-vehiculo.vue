<template>
  <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
    <!--begin::Page-->
    <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
      <!--begin::Header-->
      <div
        id="kt_app_header"
        class="app-header"
        data-kt-sticky="true"
        data-kt-sticky-activate="{default: true, lg: true}"
        data-kt-sticky-name="app-header-minimize"
        data-kt-sticky-offset="{default: '200px', lg: '0'}"
        data-kt-sticky-animation="false"
      >
        <!--begin::Header container-->
      </div>
      <!--end::Header-->
      <!--begin::Wrapper-->
      <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
        <!--begin::Main-->
        <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
          <!--begin::Content wrapper-->
          <div class="d-flex flex-column flex-column-fluid">
            <!--begin::Toolbar-->
            <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
              <!--begin::Toolbar container-->
              <div
                id="kt_app_toolbar_container"
                class="app-container container-xxl d-flex flex-stack"
              >
                <!--begin::Page title-->
                <div
                  class="page-title d-flex flex-column justify-content-center flex-wrap me-3"
                >
                  <!--begin::Title-->
                  <h1
                    class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0"
                  >
                    Vertical
                  </h1>
                  <!--end::Title-->
                  <!--begin::Breadcrumb-->
                  <ul
                    class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1"
                  >
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-muted">
                      <a href="index.html" class="text-muted text-hover-primary"
                        >Home</a
                      >
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item">
                      <span class="bullet bg-gray-500 w-5px h-2px"></span>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-muted">Utilities</li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item">
                      <span class="bullet bg-gray-500 w-5px h-2px"></span>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-muted">Wizards</li>
                    <!--end::Item-->
                  </ul>
                  <!--end::Breadcrumb-->
                </div>
                <!--end::Page title-->
              </div>
              <!--end::Toolbar container-->
            </div>
            <!--end::Toolbar-->
            <!--begin::Content-->
            <div id="kt_app_content" class="app-content flex-column-fluid">
              <!--begin::Content container-->
              <div
                id="kt_app_content_container"
                class="app-container container-xxl"
              >
                <!--begin::Stepper-->
                <div
                  class="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid gap-10"
                  id="kt_create_account_stepper"
                >
                  <!--begin::Aside-->
                  <div
                    class="card d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px"
                  >
                    <!--begin::Wrapper-->
                    <div class="card-body px-6 px-lg-10 px-xxl-15 py-20">
                      <!--begin::Nav-->
                      <div class="stepper-nav">
                        <!--begin::Step 1-->
                        <div
                          class="stepper-item current"
                          data-kt-stepper-element="nav"
                        >
                          <!--begin::Wrapper-->
                          <div class="stepper-wrapper">
                            <!--begin::Icon-->
                            <div class="stepper-icon w-40px h-40px">
                              <i
                                class="ki-duotone ki-check fs-2 stepper-check"
                              ></i>
                              <span class="stepper-number">1</span>
                            </div>
                            <!--end::Icon-->
                            <!--begin::Label-->
                            <div class="stepper-label">
                              <h3 class="stepper-title">Datos del Cliente</h3>
                            </div>
                            <!--end::Label-->
                          </div>
                          <!--end::Wrapper-->
                          <!--begin::Line-->
                          <div class="stepper-line h-40px"></div>
                          <!--end::Line-->
                        </div>
                        <!--end::Step 1-->
                        <!--begin::Step 2-->
                        <div class="stepper-item" data-kt-stepper-element="nav">
                          <!--begin::Wrapper-->
                          <div class="stepper-wrapper">
                            <!--begin::Icon-->
                            <div class="stepper-icon w-40px h-40px">
                              <i
                                class="ki-duotone ki-check fs-2 stepper-check"
                              ></i>
                              <span class="stepper-number">2</span>
                            </div>
                            <!--end::Icon-->
                            <!--begin::Label-->
                            <div class="stepper-label">
                              <h3 class="stepper-title">Account Settings</h3>
                              <div class="stepper-desc fw-semibold">
                                Setup Your Account Settings
                              </div>
                            </div>
                            <!--end::Label-->
                          </div>
                          <!--end::Wrapper-->
                          <!--begin::Line-->
                          <div class="stepper-line h-40px"></div>
                          <!--end::Line-->
                        </div>
                        <!--end::Step 2-->
                        <!--begin::Step 3-->
                        <div class="stepper-item" data-kt-stepper-element="nav">
                          <!--begin::Wrapper-->
                          <div class="stepper-wrapper">
                            <!--begin::Icon-->
                            <div class="stepper-icon w-40px h-40px">
                              <i
                                class="ki-duotone ki-check fs-2 stepper-check"
                              ></i>
                              <span class="stepper-number">3</span>
                            </div>
                            <!--end::Icon-->
                            <!--begin::Label-->
                            <div class="stepper-label">
                              <h3 class="stepper-title">Business Info</h3>
                              <div class="stepper-desc fw-semibold">
                                Your Business Related Info
                              </div>
                            </div>
                            <!--end::Label-->
                          </div>
                          <!--end::Wrapper-->
                          <!--begin::Line-->
                          <div class="stepper-line h-40px"></div>
                          <!--end::Line-->
                        </div>
                        <!--end::Step 3-->
                        <!--begin::Step 4-->
                        <div class="stepper-item" data-kt-stepper-element="nav">
                          <!--begin::Wrapper-->
                          <div class="stepper-wrapper">
                            <!--begin::Icon-->
                            <div class="stepper-icon w-40px h-40px">
                              <i
                                class="ki-duotone ki-check fs-2 stepper-check"
                              ></i>
                              <span class="stepper-number">4</span>
                            </div>
                            <!--end::Icon-->
                            <!--begin::Label-->
                            <div class="stepper-label">
                              <h3 class="stepper-title">Billing Details</h3>
                              <div class="stepper-desc fw-semibold">
                                Set Your Payment Methods
                              </div>
                            </div>
                            <!--end::Label-->
                          </div>
                          <!--end::Wrapper-->
                          <!--begin::Line-->
                          <div class="stepper-line h-40px"></div>
                          <!--end::Line-->
                        </div>
                        <!--end::Step 4-->
                        <!--begin::Step 5-->
                        <div
                          class="stepper-item mark-completed"
                          data-kt-stepper-element="nav"
                        >
                          <!--begin::Wrapper-->
                          <div class="stepper-wrapper">
                            <!--begin::Icon-->
                            <div class="stepper-icon w-40px h-40px">
                              <i
                                class="ki-duotone ki-check fs-2 stepper-check"
                              ></i>
                              <span class="stepper-number">5</span>
                            </div>
                            <!--end::Icon-->
                            <!--begin::Label-->
                            <div class="stepper-label">
                              <h3 class="stepper-title">Completed</h3>
                              <div class="stepper-desc fw-semibold">
                                Woah, we are here
                              </div>
                            </div>
                            <!--end::Label-->
                          </div>
                          <!--end::Wrapper-->
                        </div>
                        <!--end::Step 5-->
                      </div>
                      <!--end::Nav-->
                    </div>
                    <!--end::Wrapper-->
                  </div>
                  <!--begin::Aside-->
                  <!--begin::Content-->
                  <div class="card d-flex flex-row-fluid flex-center">
                    <!--begin::Form-->
                    <form
                      class="card-body py-20 w-100 mw-xl-700px px-9"
                      id="kt_create_account_form"
                    >
                      <!--begin::Step 1-->
                      <div data-kt-stepper-element="content">
                        <!--begin::Wrapper-->
                        <div class="w-100">
                          <!--begin::Heading-->
                          <div class="pb-10 pb-lg-15">
                            <!--begin::Title-->
                            <h2
                              class="fw-bold d-flex align-items-center text-gray-900"
                            >
                              Informacion del Cliente
                            </h2>
                          </div>
                          <!--end::Heading-->
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label mb-3"
                              >Nombre del Cliente</label
                            >
                            <!--end::Label-->
                            <!--begin::Input-->
                            <input
                              type="text"
                              class="form-control mb-2"
                              name="customer_name"
                              placeholder=""
                              value=""
                            />
                            <!--end::Input-->
                          </div>
                          <!--end::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label mb-3"
                              >Correo</label
                            >
                            <!--end::Label-->
                            <!--begin::Input-->
                            <input
                              type="text"
                              class="form-control mb-2"
                              name="email"
                              placeholder=""
                              value=""
                            />
                            <!--end::Input-->
                          </div>
                        </div>
                      </div>
                      <!--begin::Step 2-->
                      <div class="current" data-kt-stepper-element="content">
                        <!--begin::Wrapper-->
                        <div class="w-100">
                          <!--begin::Heading-->
                          <div class="pb-10 pb-lg-12">
                            <!--begin::Title-->
                            <h2 class="fw-bold text-gray-900">
                              Informacion del Vehiculo
                            </h2>
                            <!--end::Title-->
                          </div>
                          <!--end::Heading-->
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Nombre de Vehiculo</label
                          >
                          <input
                            type="text"
                            name="product_name"
                            class="form-control mb-2"
                            placeholder="vehiculo"
                            value=""
                          />

                          <div class="mb-10 fv-row"></div>
                          <!--begin::Label-->
                          <label class="required form-label">Marca</label>
                          <!--end::Label-->
                          <!--begin::Input-->
                          <select name="brand_name" class="form-control mb-2">
                            <option value="">Seleccione una marca</option>
                            <option value="marca1">Marca 1</option>
                            <option value="marca2">Marca 2</option>
                            <option value="marca3">Marca 3</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <!--begin::Label-->
                          <label class="required form-label">Modelo</label>
                          <!--end::Label-->
                          <!--begin::Input-->
                          <select name="model_name" class="form-control mb-2">
                            <option value="">Seleccione un modelo</option>
                            <option value="modelo1">Modelo 1</option>
                            <option value="modelo2">Modelo 2</option>
                            <option value="modelo3">Modelo 3</option>
                          </select>
                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Dimensiones (mm)</label
                          >
                          <select name="dimensions" class="form-control mb-2">
                            <option value="">Seleccione dimensiones</option>
                            <option value="1000">5270×1900×1860</option>
                            <option value="2000">5270×1900×1860</option>
                            <option value="3000">5270×1900×1860</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Tamaño de la caja de carga (mm)
                          </label>
                          <select
                            name="cargo_box_size"
                            class="form-control mb-2"
                          >
                            <option value="">Seleccione tamaño</option>
                            <option value="500">1595×1540×545</option>
                            <option value="1000">1595×1540×545</option>
                            <option value="1500">1595×1540×545</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Distancia entre ejes (mm)</label
                          >
                          <select name="weebare" class="form-control mb-2">
                            <option value="">Seleccione distancia</option>
                            <option value="2500">2500</option>
                            <option value="3000">3000</option>
                            <option value="3500">3500</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label">Asientos</label>
                          <select name="seating" class="form-control mb-2">
                            <option value="">
                              Seleccione número de asientos
                            </option>
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Distancia al suelo(mm)
                          </label>
                          <select
                            name="ground_clearance"
                            class="form-control mb-2"
                          >
                            <option value="">Seleccione distancia</option>
                            <option value="150">150 mm</option>
                            <option value="200">200 mm</option>
                            <option value="250">250 mm</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Peso en vacio (kg)</label
                          >
                          <select name="empty_weight" class="form-control mb-2">
                            <option value="">Seleccione peso</option>
                            <option value="1000">1000 kg</option>
                            <option value="1500">1500 kg</option>
                            <option value="2000">2000 kg</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Desplazamiento (ml)</label
                          >
                          <select name="displacement" class="form-control mb-2">
                            <option value="">Seleccione desplazamiento</option>
                            <option value="1000">1000 ml</option>
                            <option value="1500">1500 ml</option>
                            <option value="2000">2000 ml</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Potencia maxima (kW)</label
                          >
                          <select
                            name="maximun_power"
                            class="form-control mb-2"
                          >
                            <option value="">Seleccione potencia</option>
                            <option value="100">100 kW</option>
                            <option value="150">150 kW</option>
                            <option value="200">200 kW</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label">Torque(Nm)</label>
                          <select name="torque" class="form-control mb-2">
                            <option value="">Seleccione torque</option>
                            <option value="200">200 Nm</option>
                            <option value="300">300 Nm</option>
                            <option value="400">400 Nm</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Velocidad maxima (km/h)</label
                          >
                          <select
                            name="maximun_speed"
                            class="form-control mb-2"
                          >
                            <option value="">Seleccione velocidad</option>
                            <option value="150">150 km/h</option>
                            <option value="200">200 km/h</option>
                            <option value="250">250 km/h</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label">Traccion</label>
                          <select name="traction" class="form-control mb-2">
                            <option value="">Seleccione tracción</option>
                            <option value="4x2">4x2</option>
                            <option value="4x4">4x4</option>
                            <option value="AWD">AWD</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Tipo de frenos</label
                          >
                          <select name="brake_type" class="form-control mb-2">
                            <option value="">Seleccione tipo de frenos</option>
                            <option value="disco">Disco</option>
                            <option value="tambor">Tambor</option>
                            <option value="ABS">ABS</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label">Neumaticos</label>
                          <select name="tires_type" class="form-control mb-2">
                            <option value="">
                              Seleccione tipo de neumáticos
                            </option>
                            <option value="verano">Verano</option>
                            <option value="invierno">Invierno</option>
                            <option value="all_season">All Season</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Caja de cambios</label
                          >
                          <select name="gearbox" class="form-control mb-2">
                            <option value="">Seleccione caja de cambios</option>
                            <option value="manual">Manual</option>
                            <option value="automatica">Automática</option>
                            <option value="CVT">CVT</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Suspension delantera</label
                          >
                          <select
                            name="front_suspension"
                            class="form-control mb-2"
                          >
                            <option value="">
                              Seleccione suspensión delantera
                            </option>
                            <option value="independiente">Independiente</option>
                            <option value="macpherson">MacPherson</option>
                            <option value="doble_horquilla">
                              Doble horquilla
                            </option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Suspension Trasera</label
                          >
                          <select
                            name="rear_suspension"
                            class="form-control mb-2"
                          >
                            <option value="">
                              Seleccione suspensión trasera
                            </option>
                            <option value="independiente">Independiente</option>
                            <option value="eje_rigido">Eje rígido</option>
                            <option value="multibrazo">Multibrazo</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Capaciad del tanque de combustible (L)</label
                          >
                          <input
                            type="number"
                            name="tank_capacity"
                            class="form-control mb-2"
                            placeholder="escoja"
                            value=""
                          />

                          <!--end::Input group-->
                        </div>
                        <!--end::Wrapper-->
                      </div>
                      <!--end::Step 2-->
                      <!--begin::Step 3-->
                      <div data-kt-stepper-element="content">
                        <!--begin::Wrapper-->
                        <div class="w-100">
                          <!--begin::Heading-->
                          <div class="pb-10 pb-lg-12">
                            <!--begin::Title-->
                            <h2 class="fw-bold text-gray-900">
                              Informacion del Vehiculo
                            </h2>
                            <!--end::Title-->
                          </div>
                          <!--end::Heading-->
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Nombre de Vehiculo</label
                          >
                          <input
                            type="text"
                            name="product_name"
                            class="form-control mb-2"
                            placeholder="vehiculo"
                            value=""
                          />

                          <div class="mb-10 fv-row"></div>
                          <!--begin::Label-->
                          <label class="required form-label">Marca</label>
                          <!--end::Label-->
                          <!--begin::Input-->
                          <select name="brand_name" class="form-control mb-2">
                            <option value="">Seleccione una marca</option>
                            <option value="marca1">Marca 1</option>
                            <option value="marca2">Marca 2</option>
                            <option value="marca3">Marca 3</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <!--begin::Label-->
                          <label class="required form-label">Modelo</label>
                          <!--end::Label-->
                          <!--begin::Input-->
                          <select name="model_name" class="form-control mb-2">
                            <option value="">Seleccione un modelo</option>
                            <option value="modelo1">Modelo 1</option>
                            <option value="modelo2">Modelo 2</option>
                            <option value="modelo3">Modelo 3</option>
                          </select>
                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Dimensiones (mm)</label
                          >
                          <select name="dimensions" class="form-control mb-2">
                            <option value="">Seleccione dimensiones</option>
                            <option value="1000">5270×1900×1860</option>
                            <option value="2000">5270×1900×1860</option>
                            <option value="3000">5270×1900×1860</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Tamaño de la caja de carga (mm)
                          </label>
                          <select
                            name="cargo_box_size"
                            class="form-control mb-2"
                          >
                            <option value="">Seleccione tamaño</option>
                            <option value="500">1595×1540×545</option>
                            <option value="1000">1595×1540×545</option>
                            <option value="1500">1595×1540×545</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Distancia entre ejes (mm)</label
                          >
                          <select name="weebare" class="form-control mb-2">
                            <option value="">Seleccione distancia</option>
                            <option value="2500">2500</option>
                            <option value="3000">3000</option>
                            <option value="3500">3500</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label">Asientos</label>
                          <select name="seating" class="form-control mb-2">
                            <option value="">
                              Seleccione número de asientos
                            </option>
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Distancia al suelo(mm)
                          </label>
                          <select
                            name="ground_clearance"
                            class="form-control mb-2"
                          >
                            <option value="">Seleccione distancia</option>
                            <option value="150">150 mm</option>
                            <option value="200">200 mm</option>
                            <option value="250">250 mm</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Peso en vacio (kg)</label
                          >
                          <select name="empty_weight" class="form-control mb-2">
                            <option value="">Seleccione peso</option>
                            <option value="1000">1000 kg</option>
                            <option value="1500">1500 kg</option>
                            <option value="2000">2000 kg</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Desplazamiento (ml)</label
                          >
                          <select name="displacement" class="form-control mb-2">
                            <option value="">Seleccione desplazamiento</option>
                            <option value="1000">1000 ml</option>
                            <option value="1500">1500 ml</option>
                            <option value="2000">2000 ml</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Potencia maxima (kW)</label
                          >
                          <select
                            name="maximun_power"
                            class="form-control mb-2"
                          >
                            <option value="">Seleccione potencia</option>
                            <option value="100">100 kW</option>
                            <option value="150">150 kW</option>
                            <option value="200">200 kW</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label">Torque(Nm)</label>
                          <select name="torque" class="form-control mb-2">
                            <option value="">Seleccione torque</option>
                            <option value="200">200 Nm</option>
                            <option value="300">300 Nm</option>
                            <option value="400">400 Nm</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Velocidad maxima (km/h)</label
                          >
                          <select
                            name="maximun_speed"
                            class="form-control mb-2"
                          >
                            <option value="">Seleccione velocidad</option>
                            <option value="150">150 km/h</option>
                            <option value="200">200 km/h</option>
                            <option value="250">250 km/h</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label">Traccion</label>
                          <select name="traction" class="form-control mb-2">
                            <option value="">Seleccione tracción</option>
                            <option value="4x2">4x2</option>
                            <option value="4x4">4x4</option>
                            <option value="AWD">AWD</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Tipo de frenos</label
                          >
                          <select name="brake_type" class="form-control mb-2">
                            <option value="">Seleccione tipo de frenos</option>
                            <option value="disco">Disco</option>
                            <option value="tambor">Tambor</option>
                            <option value="ABS">ABS</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label">Neumaticos</label>
                          <select name="tires_type" class="form-control mb-2">
                            <option value="">
                              Seleccione tipo de neumáticos
                            </option>
                            <option value="verano">Verano</option>
                            <option value="invierno">Invierno</option>
                            <option value="all_season">All Season</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Caja de cambios</label
                          >
                          <select name="gearbox" class="form-control mb-2">
                            <option value="">Seleccione caja de cambios</option>
                            <option value="manual">Manual</option>
                            <option value="automatica">Automática</option>
                            <option value="CVT">CVT</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Suspension delantera</label
                          >
                          <select
                            name="front_suspension"
                            class="form-control mb-2"
                          >
                            <option value="">
                              Seleccione suspensión delantera
                            </option>
                            <option value="independiente">Independiente</option>
                            <option value="macpherson">MacPherson</option>
                            <option value="doble_horquilla">
                              Doble horquilla
                            </option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Suspension Trasera</label
                          >
                          <select
                            name="rear_suspension"
                            class="form-control mb-2"
                          >
                            <option value="">
                              Seleccione suspensión trasera
                            </option>
                            <option value="independiente">Independiente</option>
                            <option value="eje_rigido">Eje rígido</option>
                            <option value="multibrazo">Multibrazo</option>
                          </select>

                          <div class="mb-10 fv-row"></div>
                          <label class="required form-label"
                            >Capaciad del tanque de combustible (L)</label
                          >
                          <input
                            type="number"
                            name="tank_capacity"
                            class="form-control mb-2"
                            placeholder="escoja"
                            value=""
                          />

                          <!--end::Input group-->
                        </div>
                        <!--end::Wrapper-->
                      </div>
                      <!--end::Step 3-->
                      <!--begin::Step 4-->
                      <div data-kt-stepper-element="content">
                        <!--begin::Wrapper-->
                        <div class="w-100">
                          <!--begin::Heading-->
                          <div class="pb-10 pb-lg-15">
                            <!--begin::Title-->
                            <h2 class="fw-bold text-gray-900">
                              Características y Opcionales
                            </h2>
                            <!--end::Title-->

                            <!--end::Notice-->
                          </div>
                          <!--end::Heading-->
                          <!--begin::Input group-->
                          <div class="d-flex flex-column mb-7 fv-row">
                            <!--begin::Label-->
                            <!-- Características y Opcionales -->
                            <div class="form-group">
                              <div class="mb-10 fv-row"></div>

                              <input
                                type="checkbox"
                                name="caracteristicas"
                                value="abs_ebd"
                                id="abs_ebd"
                              />
                              <label for="abs_ebd">ABS+EBD</label>
                            </div>
                            <div>
                              <input
                                type="checkbox"
                                name="caracteristicas"
                                value="luces_led"
                                id="luces_led"
                              />
                              <label for="luces_led"
                                >Luces delanteras LED</label
                              >
                            </div>
                            <div>
                              <input
                                type="checkbox"
                                name="caracteristicas"
                                value="cierre_centralizado"
                                id="cierre_centralizado"
                              />
                              <label for="cierre_centralizado"
                                >Cierre Centralizado</label
                              >
                            </div>
                            <div>
                              <input
                                type="checkbox"
                                name="caracteristicas"
                                value="llantas_aluminio"
                                id="llantas_aluminio"
                              />
                              <label for="llantas_aluminio"
                                >Llantas de aluminio</label
                              >
                            </div>
                            <div>
                              <input
                                type="checkbox"
                                name="caracteristicas"
                                value="imagen_reversa"
                                id="imagen_reversa"
                              />
                              <label for="imagen_reversa"
                                >Imagen de reversa</label
                              >
                            </div>
                            <div>
                              <input
                                type="checkbox"
                                name="caracteristicas"
                                value="asientos_cuero"
                                id="asientos_cuero"
                              />
                              <label for="asientos_cuero"
                                >Asientos con forro de cuero</label
                              >
                            </div>
                            <div>
                              <input
                                type="checkbox"
                                name="caracteristicas"
                                value="aire_acondicionado"
                                id="aire_acondicionado"
                              />
                              <label for="aire_acondicionado"
                                >Aire Acondicionado</label
                              >
                            </div>
                            <div>
                              <input
                                type="checkbox"
                                name="caracteristicas"
                                value="doble_airbag"
                                id="doble_airbag"
                              />
                              <label for="doble_airbag">Doble Air Bag</label>
                            </div>
                            <div>
                              <input
                                type="checkbox"
                                name="caracteristicas"
                                value="eps"
                                id="eps"
                              />
                              <label for="eps">EPS</label>
                            </div>
                            <div>
                              <input
                                type="checkbox"
                                name="caracteristicas"
                                value="color_rojo"
                                id="color_rojo"
                              />
                              <label for="color_rojo">Color ROJO</label>
                            </div>
                            <div>
                              <input
                                type="checkbox"
                                name="caracteristicas"
                                value="motor_gasolina"
                                id="motor_gasolina"
                              />
                              <label for="motor_gasolina"
                                >Motor de Gasolina de 1962 CC</label
                              >
                            </div>
                          </div>
                        </div>
                        <!--end::Input group-->

                        <!--end::Wrapper-->
                      </div>
                      <!--end::Step 4-->
                      <!--begin::Step 5-->
                      <div data-kt-stepper-element="content">
                        <!--begin::Wrapper-->
                        <div class="w-100">
                          <!--begin::Heading-->
                          <div class="pb-8 pb-lg-10">
                            <!--begin::Title-->
                            <h2 class="fw-bold text-gray-900">
                              Datos de Reserva
                            </h2>
                            <!--end::Title-->
                          </div>
                          <!--end::Heading-->
                          <!--begin::Body-->
                          <div class="mb-0">
                            <div class="w-100">
                              <!-- Confirmación -->
                              <div class="mb-10 fv-row">
                                <label class="required form-label"
                                  >Precio</label
                                >
                                <input
                                  type="number"
                                  name="price"
                                  class="form-control mb-2"
                                  id="precio"
                                  required
                                />
                              </div>
                              <div class="mb-10 fv-row">
                                <label for="fecha">Fecha de Reserva:</label>
                                <input
                                  type="date"
                                  class="form-control"
                                  id="fecha"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <!--end::Body-->
                        </div>
                        <!--end::Wrapper-->
                      </div>
                      <!--end::Step 5-->
                      <!--begin::Actions-->
                      <div class="d-flex flex-stack pt-10">
                        <!--begin::Wrapper-->

                        <div class="mr-2">
                          <button
                            type="button"
                            class="btn btn-lg btn-light-primary me-3"
                            data-kt-stepper-action="previous"
                          >
                            <i class="ki-duotone ki-arrow-left fs-4 me-1">
                              <span class="path1"></span>
                              <span class="path2"></span> </i
                            >Back
                          </button>
                        </div>
                        <!--end::Wrapper-->
                        <!--begin::Wrapper-->
                        <div>
                          <button
                            type="button"
                            class="btn btn-lg btn-primary me-3"
                            data-kt-stepper-action="submit"
                          >
                            <span class="indicator-label"
                              >Submit
                              <i
                                class="ki-duotone ki-arrow-right fs-3 ms-2 me-0"
                              >
                                <span class="path1"></span>
                                <span class="path2"></span> </i
                            ></span>
                            <span class="indicator-progress"
                              >Please wait...
                              <span
                                class="spinner-border spinner-border-sm align-middle ms-2"
                              ></span
                            ></span>
                          </button>
                          <button
                            type="button"
                            class="btn btn-lg btn-primary"
                            data-kt-stepper-action="next"
                          >
                            Continue
                            <i class="ki-duotone ki-arrow-right fs-4 ms-1 me-0">
                              <span class="path1"></span>
                              <span class="path2"></span>
                            </i>
                          </button>
                        </div>
                        <!--end::Wrapper-->
                      </div>
                      <!--end::Actions-->
                    </form>
                    <!--end::Form-->
                  </div>
                  <!--end::Content-->
                </div>
                <!--end::Stepper-->
              </div>
              <!--end::Content container-->
            </div>
            <!--end::Content-->
          </div>
          <!--end::Content wrapper-->
        </div>
        <!--end:::Main-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Page-->
  </div>
</template>
