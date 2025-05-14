<template>
  <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
    <!--begin::Page-->
    <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
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
                    Sales Report
                  </h1>
                  <!--end::Title-->
                  <!--begin::Breadcrumb-->
                </div>

                <div class="d-flex align-items-center gap-2 gap-lg-3">
                  <!--begin::Filter menu-->
                  <div class="m-0">
                    <!--begin::Menu toggle-->
                    <a
                      href="#"
                      class="btn btn-sm btn-flex btn-secondary fw-bold"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      <i class="ki-duotone ki-filter fs-6 text-muted me-1">
                        <span class="path1"></span>
                        <span class="path2"></span> </i
                      >Filter</a
                    >
                    <!--end::Menu toggle-->
                    <!--begin::Menu 1-->
                    <div
                      class="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                      data-kt-menu="true"
                      id="kt_menu_66b9a24f9f3be"
                    >
                      <!--begin::Header-->

                      <div class="px-7 py-5">
                        <!--begin::Input group-->
                        <div class="mb-10">
                          <!--begin::Label-->
                          <label class="form-label fw-semibold"
                            >Member Type:</label
                          >
                          <!--end::Label-->
                          <!--begin::Options-->
                          <div class="d-flex">
                            <!--begin::Options-->
                            <label
                              class="form-check form-check-sm form-check-custom form-check-solid me-5"
                            >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="1"
                              />
                              <span class="form-check-label">Author</span>
                            </label>
                            <!--end::Options-->
                            <!--begin::Options-->
                            <label
                              class="form-check form-check-sm form-check-custom form-check-solid"
                            >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="2"
                                checked="checked"
                              />
                              <span class="form-check-label">Customer</span>
                            </label>
                            <!--end::Options-->
                          </div>
                          <!--end::Options-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Input group-->
                        <div class="mb-10">
                          <!--begin::Label-->
                          <label class="form-label fw-semibold"
                            >Notifications:</label
                          >
                          <!--end::Label-->
                          <!--begin::Switch-->
                          <div
                            class="form-check form-switch form-switch-sm form-check-custom form-check-solid"
                          >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              name="notifications"
                              checked="checked"
                            />
                            <label class="form-check-label">Enabled</label>
                          </div>
                          <!--end::Switch-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Actions-->
                        <div class="d-flex justify-content-end">
                          <button
                            type="reset"
                            class="btn btn-sm btn-light btn-active-light-primary me-2"
                            data-kt-menu-dismiss="true"
                          >
                            Reset
                          </button>
                          <button
                            type="submit"
                            class="btn btn-sm btn-primary"
                            data-kt-menu-dismiss="true"
                          >
                            Apply
                          </button>
                        </div>
                        <!--end::Actions-->
                      </div>
                      <!--end::Form-->
                    </div>
                    <!--end::Menu 1-->
                  </div>

                  <a
                    href="#"
                    class="btn btn-sm fw-bold btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_create_app"
                    >Create</a
                  >
                  <!--end::Primary button-->
                </div>
                <!--end::Actions-->
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
                <!--begin::Products-->
                <div class="card card-flush">
                  <!--begin::Card header-->
                  <div
                    class="card-header align-items-center py-5 gap-2 gap-md-5"
                  >
                    <!--begin::Card title-->
                    <div class="card-title">
                      <!--begin::Search-->
                      <div
                        class="d-flex align-items-center position-relative my-1"
                      >
                        <i
                          class="ki-duotone ki-magnifier fs-3 position-absolute ms-4"
                        >
                          <span class="path1"></span>
                          <span class="path2"></span>
                        </i>
                        <input
                          type="text"
                          data-kt-ecommerce-order-filter="search"
                          class="form-control form-control-solid w-250px ps-12"
                          placeholder="Search Report"
                        />
                      </div>
                      <!--end::Search-->
                      <!--begin::Export buttons-->
                      <div
                        id="kt_ecommerce_report_sales_export"
                        class="d-none"
                      ></div>
                      <!--end::Export buttons-->
                    </div>
                    <!--end::Card title-->
                    <!--begin::Card toolbar-->
                    <div
                      class="card-toolbar flex-row-fluid justify-content-end gap-5"
                    >
                      <!--begin::Daterangepicker-->
                      <input
                        class="form-control form-control-solid w-100 mw-250px"
                        placeholder="Pick date range"
                        id="kt_ecommerce_report_sales_daterangepicker"
                      />
                      <!--end::Daterangepicker-->
                      <!--begin::Export dropdown-->
                      <button
                        type="button"
                        class="btn btn-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                      >
                        <i class="ki-duotone ki-exit-up fs-2">
                          <span class="path1"></span>
                          <span class="path2"></span> </i
                        >Export Report
                      </button>
                      <!--begin::Menu-->
                      <div
                        id="kt_ecommerce_report_sales_export_menu"
                        class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-200px py-4"
                        data-kt-menu="true"
                      >
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a
                            href="#"
                            class="menu-link px-3"
                            data-kt-ecommerce-export="copy"
                            >Copy to clipboard</a
                          >
                        </div>
                        <!--end::Menu item-->
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a
                            href="#"
                            class="menu-link px-3"
                            data-kt-ecommerce-export="excel"
                            >Export as Excel</a
                          >
                        </div>
                        <!--end::Menu item-->
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a
                            href="#"
                            class="menu-link px-3"
                            data-kt-ecommerce-export="csv"
                            >Export as CSV</a
                          >
                        </div>
                        <!--end::Menu item-->
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a
                            href="#"
                            class="menu-link px-3"
                            data-kt-ecommerce-export="pdf"
                            >Export as PDF</a
                          >
                        </div>
                        <!--end::Menu item-->
                      </div>
                    </div>
                  </div>
                  <!--end::Card header-->
                  <!--begin::Card body-->
                  <div class="card-body pt-0">
                    <!--begin::Table-->
                    <table
                      class="table align-middle table-row-dashed fs-6 gy-5"
                      id="kt_ecommerce_report_sales_table"
                    >
                      <thead>
                        <tr
                          class="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0"
                        >
                          <th class="min-w-100px">Date</th>
                          <th class="text-end min-w-75px">No. Orders</th>
                          <th class="text-end min-w-75px">Products Sold</th>
                          <th class="text-end min-w-75px">Tax</th>
                          <th class="text-end min-w-100px">Total</th>
                        </tr>
                      </thead>
                      <tbody class="fw-semibold text-gray-600">
                        <tr>
                          <td>Sep 22, 2024</td>
                          <td class="text-end pe-0">9</td>
                          <td class="text-end pe-0">12</td>
                          <td class="text-end pe-0">$6.00</td>
                          <td class="text-end">$38.00</td>
                        </tr>
                        <tr>
                          <td>Oct 25, 2024</td>
                          <td class="text-end pe-0">15</td>
                          <td class="text-end pe-0">18</td>
                          <td class="text-end pe-0">$81.00</td>
                          <td class="text-end">$543.00</td>
                        </tr>
                        <tr>
                          <td>Jul 25, 2024</td>
                          <td class="text-end pe-0">18</td>
                          <td class="text-end pe-0">22</td>
                          <td class="text-end pe-0">$81.00</td>
                          <td class="text-end">$538.00</td>
                        </tr>
                        <tr>
                          <td>Sep 22, 2024</td>
                          <td class="text-end pe-0">10</td>
                          <td class="text-end pe-0">12</td>
                          <td class="text-end pe-0">$73.00</td>
                          <td class="text-end">$489.00</td>
                        </tr>
                        <tr>
                          <td>Oct 25, 2024</td>
                          <td class="text-end pe-0">10</td>
                          <td class="text-end pe-0">14</td>
                          <td class="text-end pe-0">$44.00</td>
                          <td class="text-end">$292.00</td>
                        </tr>
                        <tr>
                          <td>May 05, 2024</td>
                          <td class="text-end pe-0">18</td>
                          <td class="text-end pe-0">20</td>
                          <td class="text-end pe-0">$8.00</td>
                          <td class="text-end">$53.00</td>
                        </tr>
                        <tr>
                          <td>Dec 20, 2024</td>
                          <td class="text-end pe-0">1</td>
                          <td class="text-end pe-0">4</td>
                          <td class="text-end pe-0">$80.00</td>
                          <td class="text-end">$533.00</td>
                        </tr>
                        <tr>
                          <td>Sep 22, 2024</td>
                          <td class="text-end pe-0">10</td>
                          <td class="text-end pe-0">12</td>
                          <td class="text-end pe-0">$8.00</td>
                          <td class="text-end">$54.00</td>
                        </tr>
                        <tr>
                          <td>Aug 19, 2024</td>
                          <td class="text-end pe-0">6</td>
                          <td class="text-end pe-0">11</td>
                          <td class="text-end pe-0">$36.00</td>
                          <td class="text-end">$241.00</td>
                        </tr>
                        <tr>
                          <td>Jul 25, 2024</td>
                          <td class="text-end pe-0">19</td>
                          <td class="text-end pe-0">22</td>
                          <td class="text-end pe-0">$5.00</td>
                          <td class="text-end">$30.00</td>
                        </tr>
                        <tr>
                          <td>Jun 24, 2024</td>
                          <td class="text-end pe-0">11</td>
                          <td class="text-end pe-0">14</td>
                          <td class="text-end pe-0">$69.00</td>
                          <td class="text-end">$459.00</td>
                        </tr>
                        <tr>
                          <td>Jun 24, 2024</td>
                          <td class="text-end pe-0">17</td>
                          <td class="text-end pe-0">19</td>
                          <td class="text-end pe-0">$84.00</td>
                          <td class="text-end">$562.00</td>
                        </tr>
                        <tr>
                          <td>Sep 22, 2024</td>
                          <td class="text-end pe-0">14</td>
                          <td class="text-end pe-0">19</td>
                          <td class="text-end pe-0">$81.00</td>
                          <td class="text-end">$538.00</td>
                        </tr>
                        <tr>
                          <td>Feb 21, 2024</td>
                          <td class="text-end pe-0">18</td>
                          <td class="text-end pe-0">20</td>
                          <td class="text-end pe-0">$86.00</td>
                          <td class="text-end">$570.00</td>
                        </tr>
                        <tr>
                          <td>Jul 25, 2024</td>
                          <td class="text-end pe-0">6</td>
                          <td class="text-end pe-0">11</td>
                          <td class="text-end pe-0">$39.00</td>
                          <td class="text-end">$257.00</td>
                        </tr>
                        <tr>
                          <td>Mar 10, 2024</td>
                          <td class="text-end pe-0">6</td>
                          <td class="text-end pe-0">11</td>
                          <td class="text-end pe-0">$61.00</td>
                          <td class="text-end">$408.00</td>
                        </tr>
                        <tr>
                          <td>Feb 21, 2024</td>
                          <td class="text-end pe-0">8</td>
                          <td class="text-end pe-0">12</td>
                          <td class="text-end pe-0">$26.00</td>
                          <td class="text-end">$173.00</td>
                        </tr>
                        <tr>
                          <td>May 05, 2024</td>
                          <td class="text-end pe-0">3</td>
                          <td class="text-end pe-0">7</td>
                          <td class="text-end pe-0">$53.00</td>
                          <td class="text-end">$355.00</td>
                        </tr>
                        <tr>
                          <td>Oct 25, 2024</td>
                          <td class="text-end pe-0">2</td>
                          <td class="text-end pe-0">5</td>
                          <td class="text-end pe-0">$38.00</td>
                          <td class="text-end">$251.00</td>
                        </tr>
                        <tr>
                          <td>Feb 21, 2024</td>
                          <td class="text-end pe-0">14</td>
                          <td class="text-end pe-0">17</td>
                          <td class="text-end pe-0">$42.00</td>
                          <td class="text-end">$281.00</td>
                        </tr>
                        <tr>
                          <td>Apr 15, 2024</td>
                          <td class="text-end pe-0">16</td>
                          <td class="text-end pe-0">20</td>
                          <td class="text-end pe-0">$3.00</td>
                          <td class="text-end">$17.00</td>
                        </tr>
                        <tr>
                          <td>Mar 10, 2024</td>
                          <td class="text-end pe-0">18</td>
                          <td class="text-end pe-0">21</td>
                          <td class="text-end pe-0">$36.00</td>
                          <td class="text-end">$241.00</td>
                        </tr>
                        <tr>
                          <td>Sep 22, 2024</td>
                          <td class="text-end pe-0">9</td>
                          <td class="text-end pe-0">14</td>
                          <td class="text-end pe-0">$86.00</td>
                          <td class="text-end">$576.00</td>
                        </tr>
                        <tr>
                          <td>Apr 15, 2024</td>
                          <td class="text-end pe-0">12</td>
                          <td class="text-end pe-0">17</td>
                          <td class="text-end pe-0">$50.00</td>
                          <td class="text-end">$336.00</td>
                        </tr>
                        <tr>
                          <td>Jul 25, 2024</td>
                          <td class="text-end pe-0">10</td>
                          <td class="text-end pe-0">15</td>
                          <td class="text-end pe-0">$39.00</td>
                          <td class="text-end">$259.00</td>
                        </tr>
                        <tr>
                          <td>Oct 25, 2024</td>
                          <td class="text-end pe-0">2</td>
                          <td class="text-end pe-0">6</td>
                          <td class="text-end pe-0">$46.00</td>
                          <td class="text-end">$306.00</td>
                        </tr>
                        <tr>
                          <td>Apr 15, 2024</td>
                          <td class="text-end pe-0">18</td>
                          <td class="text-end pe-0">20</td>
                          <td class="text-end pe-0">$86.00</td>
                          <td class="text-end">$571.00</td>
                        </tr>
                        <tr>
                          <td>Sep 22, 2024</td>
                          <td class="text-end pe-0">19</td>
                          <td class="text-end pe-0">21</td>
                          <td class="text-end pe-0">$58.00</td>
                          <td class="text-end">$388.00</td>
                        </tr>
                        <tr>
                          <td>Mar 10, 2024</td>
                          <td class="text-end pe-0">5</td>
                          <td class="text-end pe-0">10</td>
                          <td class="text-end pe-0">$82.00</td>
                          <td class="text-end">$549.00</td>
                        </tr>
                        <tr>
                          <td>Feb 21, 2024</td>
                          <td class="text-end pe-0">19</td>
                          <td class="text-end pe-0">21</td>
                          <td class="text-end pe-0">$77.00</td>
                          <td class="text-end">$514.00</td>
                        </tr>
                        <tr>
                          <td>May 05, 2024</td>
                          <td class="text-end pe-0">3</td>
                          <td class="text-end pe-0">7</td>
                          <td class="text-end pe-0">$65.00</td>
                          <td class="text-end">$435.00</td>
                        </tr>
                        <tr>
                          <td>Aug 19, 2024</td>
                          <td class="text-end pe-0">2</td>
                          <td class="text-end pe-0">4</td>
                          <td class="text-end pe-0">$21.00</td>
                          <td class="text-end">$142.00</td>
                        </tr>
                        <tr>
                          <td>Oct 25, 2024</td>
                          <td class="text-end pe-0">6</td>
                          <td class="text-end pe-0">11</td>
                          <td class="text-end pe-0">$88.00</td>
                          <td class="text-end">$589.00</td>
                        </tr>
                        <tr>
                          <td>Feb 21, 2024</td>
                          <td class="text-end pe-0">2</td>
                          <td class="text-end pe-0">7</td>
                          <td class="text-end pe-0">$32.00</td>
                          <td class="text-end">$215.00</td>
                        </tr>
                        <tr>
                          <td>Feb 21, 2024</td>
                          <td class="text-end pe-0">11</td>
                          <td class="text-end pe-0">15</td>
                          <td class="text-end pe-0">$40.00</td>
                          <td class="text-end">$265.00</td>
                        </tr>
                        <tr>
                          <td>Jul 25, 2024</td>
                          <td class="text-end pe-0">3</td>
                          <td class="text-end pe-0">8</td>
                          <td class="text-end pe-0">$10.00</td>
                          <td class="text-end">$65.00</td>
                        </tr>
                        <tr>
                          <td>Oct 25, 2024</td>
                          <td class="text-end pe-0">9</td>
                          <td class="text-end pe-0">14</td>
                          <td class="text-end pe-0">$17.00</td>
                          <td class="text-end">$114.00</td>
                        </tr>
                        <tr>
                          <td>Aug 19, 2024</td>
                          <td class="text-end pe-0">19</td>
                          <td class="text-end pe-0">24</td>
                          <td class="text-end pe-0">$84.00</td>
                          <td class="text-end">$561.00</td>
                        </tr>
                        <tr>
                          <td>Jun 20, 2024</td>
                          <td class="text-end pe-0">18</td>
                          <td class="text-end pe-0">21</td>
                          <td class="text-end pe-0">$27.00</td>
                          <td class="text-end">$180.00</td>
                        </tr>
                        <tr>
                          <td>Oct 25, 2024</td>
                          <td class="text-end pe-0">9</td>
                          <td class="text-end pe-0">13</td>
                          <td class="text-end pe-0">$8.00</td>
                          <td class="text-end">$50.00</td>
                        </tr>
                        <tr>
                          <td>Mar 10, 2024</td>
                          <td class="text-end pe-0">6</td>
                          <td class="text-end pe-0">8</td>
                          <td class="text-end pe-0">$62.00</td>
                          <td class="text-end">$416.00</td>
                        </tr>
                        <tr>
                          <td>Feb 21, 2024</td>
                          <td class="text-end pe-0">19</td>
                          <td class="text-end pe-0">22</td>
                          <td class="text-end pe-0">$44.00</td>
                          <td class="text-end">$293.00</td>
                        </tr>
                        <tr>
                          <td>Nov 10, 2024</td>
                          <td class="text-end pe-0">1</td>
                          <td class="text-end pe-0">3</td>
                          <td class="text-end pe-0">$65.00</td>
                          <td class="text-end">$435.00</td>
                        </tr>
                        <tr>
                          <td>Mar 10, 2024</td>
                          <td class="text-end pe-0">11</td>
                          <td class="text-end pe-0">16</td>
                          <td class="text-end pe-0">$20.00</td>
                          <td class="text-end">$133.00</td>
                        </tr>
                        <tr>
                          <td>Apr 15, 2024</td>
                          <td class="text-end pe-0">12</td>
                          <td class="text-end pe-0">16</td>
                          <td class="text-end pe-0">$29.00</td>
                          <td class="text-end">$194.00</td>
                        </tr>
                        <tr>
                          <td>Apr 15, 2024</td>
                          <td class="text-end pe-0">10</td>
                          <td class="text-end pe-0">12</td>
                          <td class="text-end pe-0">$45.00</td>
                          <td class="text-end">$300.00</td>
                        </tr>
                        <tr>
                          <td>Apr 15, 2024</td>
                          <td class="text-end pe-0">6</td>
                          <td class="text-end pe-0">9</td>
                          <td class="text-end pe-0">$49.00</td>
                          <td class="text-end">$324.00</td>
                        </tr>
                        <tr>
                          <td>May 05, 2024</td>
                          <td class="text-end pe-0">6</td>
                          <td class="text-end pe-0">11</td>
                          <td class="text-end pe-0">$7.00</td>
                          <td class="text-end">$49.00</td>
                        </tr>
                        <tr>
                          <td>Jun 24, 2024</td>
                          <td class="text-end pe-0">18</td>
                          <td class="text-end pe-0">23</td>
                          <td class="text-end pe-0">$39.00</td>
                          <td class="text-end">$262.00</td>
                        </tr>
                        <tr>
                          <td>Mar 10, 2024</td>
                          <td class="text-end pe-0">6</td>
                          <td class="text-end pe-0">9</td>
                          <td class="text-end pe-0">$36.00</td>
                          <td class="text-end">$240.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <!--end::Table-->
                  </div>
                  <!--end::Card body-->
                </div>
                <!--end::Products-->
              </div>
              <!--end::Content container-->
            </div>
            <!--end::Content-->
          </div>
          <!--end::Content wrapper-->
          <!--begin::Footer-->
        </div>
        <!--end:::Main-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Page-->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
