<template>
  <div
    id="kt_app_body"
    data-kt-app-layout="dark-sidebar"
    data-kt-app-header-fixed="true"
    data-kt-app-sidebar-enabled="true"
    data-kt-app-sidebar-fixed="true"
    data-kt-app-sidebar-hoverable="true"
    data-kt-app-sidebar-push-header="true"
    data-kt-app-sidebar-push-toolbar="true"
    data-kt-app-sidebar-push-footer="true"
    data-kt-app-toolbar-enabled="true"
    class="app-default"
  >
    <!--begin::App-->
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
          <div
            class="app-container container-fluid d-flex align-items-stretch justify-content-between"
            id="kt_app_header_container"
          >
            <!--begin::Sidebar mobile toggle-->
            <div
              class="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2"
              title="Show sidebar menu"
            >
              <div
                class="btn btn-icon btn-active-color-primary w-35px h-35px"
                id="kt_app_sidebar_mobile_toggle"
              >
                <i class="ki-duotone ki-abstract-14 fs-2 fs-md-1">
                  <span class="path1"></span>
                  <span class="path2"></span>
                </i>
              </div>
            </div>
            <!--end::Sidebar mobile toggle-->
            <!--begin::Mobile logo-->
            <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
              <a href="index.html" class="d-lg-none">
                <img
                  alt="Logo"
                  src="assets/media/logos/default-small.svg"
                  class="h-30px"
                />
              </a>
            </div>
            <!--end::Mobile logo-->
          </div>
          <!--end::Header container-->
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
                      Create
                    </h1>
                    <!--end::Title-->
                    <!--begin::Breadcrumb-->
                    <ul
                      class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1"
                    >
                      <!--begin::Item-->
                      <li class="breadcrumb-item text-muted">
                        <a
                          href="index.html"
                          class="text-muted text-hover-primary"
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
                      <li class="breadcrumb-item text-muted">
                        Invoice Manager
                      </li>
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
                  <!--begin::Layout-->
                  <div class="d-flex flex-column flex-lg-row">
                    <!--begin::Content-->
                    <div
                      class="flex-lg-row-fluid mb-10 mb-lg-0 me-lg-7 me-xl-10"
                    >
                      <!--begin::Card-->
                      <div class="card">
                        <!--begin::Card body-->
                        <div class="card-body p-12">
                          <!--begin::Form-->
                          <form action="" id="kt_invoice_form">
                            <!--begin::Wrapper-->
                            <div
                              class="d-flex flex-column align-items-start flex-xxl-row"
                            >
                              <!--begin::Input group-->
                              <div
                                class="d-flex align-items-center flex-equal fw-row me-4 order-2"
                                data-bs-toggle="tooltip"
                                data-bs-trigger="hover"
                                title="Specify invoice date"
                              >
                                <!--begin::Date-->
                                <div
                                  class="fs-6 fw-bold text-gray-700 text-nowrap"
                                >
                                  Date:
                                </div>
                                <!--end::Date-->
                                <!--begin::Input-->
                                <div
                                  class="position-relative d-flex align-items-center w-150px"
                                >
                                  <!--begin::Datepicker-->
                                  <input
                                    class="form-control form-control-transparent fw-bold pe-5"
                                    placeholder="Select date"
                                    name="invoice_date"
                                  />
                                  <!--end::Datepicker-->
                                  <!--begin::Icon-->
                                  <i
                                    class="ki-duotone ki-down fs-4 position-absolute ms-4 end-0"
                                  ></i>
                                  <!--end::Icon-->
                                </div>
                                <!--end::Input-->
                              </div>
                              <!--end::Input group-->
                              <!--begin::Input group-->
                              <div
                                class="d-flex flex-center flex-equal fw-row text-nowrap order-1 order-xxl-2 me-4"
                                data-bs-toggle="tooltip"
                                data-bs-trigger="hover"
                                title="Enter invoice number"
                              >
                                <span class="fs-2x fw-bold text-gray-800"
                                  >Invoice #</span
                                >
                                <input
                                  type="text"
                                  class="form-control form-control-flush fw-bold text-muted fs-3 w-125px"
                                  value="2021001"
                                  placehoder="..."
                                />
                              </div>
                              <!--end::Input group-->
                            </div>
                            <!--end::Top-->
                            <!--begin::Separator-->
                            <div class="separator separator-dashed my-10"></div>
                            <!--end::Separator-->
                            <!--begin::Wrapper-->
                            <div class="mb-0">
                              <!--begin::Row-->
                              <div class="row gx-10 mb-5">
                                <!--begin::Col-->
                                <div class="col-lg-6">
                                  <label
                                    class="form-label fs-6 fw-bold text-gray-700 mb-3"
                                    >Bill From</label
                                  >
                                  <!--begin::Input group-->
                                  <div class="mb-5">
                                    <input
                                      type="text"
                                      class="form-control form-control-solid"
                                      placeholder="Name"
                                    />
                                  </div>
                                  <!--end::Input group-->
                                  <!--begin::Input group-->
                                  <div class="mb-5">
                                    <input
                                      type="text"
                                      class="form-control form-control-solid"
                                      placeholder="Email"
                                    />
                                  </div>
                                  <!--end::Input group-->
                                  <!--begin::Input group-->
                                  <div class="mb-5">
                                    <textarea
                                      name="notes"
                                      class="form-control form-control-solid"
                                      rows="3"
                                      placeholder="Who is this invoice from?"
                                    ></textarea>
                                  </div>
                                  <!--end::Input group-->
                                </div>
                                <!--end::Col-->
                                <!--begin::Col-->
                              </div>
                              <!--end::Row-->
                              <!--begin::Table wrapper-->
                              <div class="table-responsive mb-10">
                                <!--begin::Table-->
                                <table
                                  class="table g-5 gs-0 mb-0 fw-bold text-gray-700"
                                  data-kt-element="items"
                                >
                                  <!--begin::Table head-->
                                  <thead>
                                    <tr
                                      class="border-bottom fs-7 fw-bold text-gray-700 text-uppercase"
                                    >
                                      <th class="min-w-300px w-475px">Item</th>
                                      <th class="min-w-100px w-100px">QTY</th>
                                      <th class="min-w-150px w-150px">Price</th>
                                      <th class="min-w-100px w-150px text-end">
                                        Total
                                      </th>
                                      <th class="min-w-75px w-75px text-end">
                                        Action
                                      </th>
                                    </tr>
                                  </thead>
                                  <!--end::Table head-->
                                  <!--begin::Table body-->
                                  <tbody>
                                    <tr
                                      class="border-bottom border-bottom-dashed"
                                      data-kt-element="item"
                                    >
                                      <td class="pe-7">
                                        <input
                                          type="text"
                                          class="form-control form-control-solid mb-2"
                                          name="name[]"
                                          placeholder="Item name"
                                        />
                                        <input
                                          type="text"
                                          class="form-control form-control-solid"
                                          name="description[]"
                                          placeholder="Description"
                                        />
                                      </td>
                                      <td class="ps-0">
                                        <input
                                          class="form-control form-control-solid"
                                          type="number"
                                          min="1"
                                          name="quantity[]"
                                          placeholder="1"
                                          value="1"
                                          data-kt-element="quantity"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="text"
                                          class="form-control form-control-solid text-end"
                                          name="price[]"
                                          placeholder="0.00"
                                          value="0.00"
                                          data-kt-element="price"
                                        />
                                      </td>
                                      <td class="pt-8 text-end text-nowrap">
                                        $
                                        <span data-kt-element="total"
                                          >0.00</span
                                        >
                                      </td>
                                      <td class="pt-5 text-end">
                                        <button
                                          type="button"
                                          class="btn btn-sm btn-icon btn-active-color-primary"
                                          data-kt-element="remove-item"
                                        >
                                          <i class="ki-duotone ki-trash fs-3">
                                            <span class="path1"></span>
                                            <span class="path2"></span>
                                            <span class="path3"></span>
                                            <span class="path4"></span>
                                            <span class="path5"></span>
                                          </i>
                                        </button>
                                      </td>
                                    </tr>
                                  </tbody>
                                  <!--end::Table body-->
                                  <!--begin::Table foot-->
                                  <tfoot>
                                    <tr
                                      class="border-top border-top-dashed align-top fs-6 fw-bold text-gray-700"
                                    >
                                      <th class="text-primary">
                                        <button
                                          class="btn btn-link py-1"
                                          data-kt-element="add-item"
                                        >
                                          Add item
                                        </button>
                                      </th>
                                      <th
                                        colspan="2"
                                        class="border-bottom border-bottom-dashed ps-0"
                                      >
                                        <div
                                          class="d-flex flex-column align-items-start"
                                        >
                                          <div class="fs-5">Subtotal</div>
                                          <button
                                            class="btn btn-link py-1"
                                            data-bs-toggle="tooltip"
                                            data-bs-trigger="hover"
                                            title="Coming soon"
                                          >
                                            Add tax
                                          </button>
                                          <button
                                            class="btn btn-link py-1"
                                            data-bs-toggle="tooltip"
                                            data-bs-trigger="hover"
                                            title="Coming soon"
                                          >
                                            Add discount
                                          </button>
                                        </div>
                                      </th>
                                      <th
                                        colspan="2"
                                        class="border-bottom border-bottom-dashed text-end"
                                      >
                                        $
                                        <span data-kt-element="sub-total"
                                          >0.00</span
                                        >
                                      </th>
                                    </tr>
                                    <tr class="align-top fw-bold text-gray-700">
                                      <th></th>
                                      <th colspan="2" class="fs-4 ps-0">
                                        Total
                                      </th>
                                      <th
                                        colspan="2"
                                        class="text-end fs-4 text-nowrap"
                                      >
                                        $
                                        <span data-kt-element="grand-total"
                                          >0.00</span
                                        >
                                      </th>
                                    </tr>
                                  </tfoot>
                                  <!--end::Table foot-->
                                </table>
                              </div>
                              <!--end::Table-->
                              <!--begin::Item template-->
                              <table
                                class="table d-none"
                                data-kt-element="item-template"
                              >
                                <tr
                                  class="border-bottom border-bottom-dashed"
                                  data-kt-element="item"
                                >
                                  <td class="pe-7">
                                    <input
                                      type="text"
                                      class="form-control form-control-solid mb-2"
                                      name="name[]"
                                      placeholder="Item name"
                                    />
                                    <input
                                      type="text"
                                      class="form-control form-control-solid"
                                      name="description[]"
                                      placeholder="Description"
                                    />
                                  </td>
                                  <td class="ps-0">
                                    <input
                                      class="form-control form-control-solid"
                                      type="number"
                                      min="1"
                                      name="quantity[]"
                                      placeholder="1"
                                      data-kt-element="quantity"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      class="form-control form-control-solid text-end"
                                      name="price[]"
                                      placeholder="0.00"
                                      data-kt-element="price"
                                    />
                                  </td>
                                  <td class="pt-8 text-end">
                                    $ <span data-kt-element="total">0.00</span>
                                  </td>
                                  <td class="pt-5 text-end">
                                    <button
                                      type="button"
                                      class="btn btn-sm btn-icon btn-active-color-primary"
                                      data-kt-element="remove-item"
                                    >
                                      <i class="ki-duotone ki-trash fs-3">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                        <span class="path3"></span>
                                        <span class="path4"></span>
                                        <span class="path5"></span>
                                      </i>
                                    </button>
                                  </td>
                                </tr>
                              </table>
                              <table
                                class="table d-none"
                                data-kt-element="empty-template"
                              >
                                <tr data-kt-element="empty">
                                  <th
                                    colspan="5"
                                    class="text-muted text-center py-10"
                                  >
                                    No items
                                  </th>
                                </tr>
                              </table>
                              <!--end::Item template-->
                              <!--begin::Notes-->
                              <div class="mb-0">
                                <label
                                  class="form-label fs-6 fw-bold text-gray-700"
                                  >Notes</label
                                >
                                <textarea
                                  name="notes"
                                  class="form-control form-control-solid"
                                  rows="3"
                                  placeholder="Thanks for your business"
                                ></textarea>
                              </div>
                              <!--end::Notes-->
                            </div>
                            <!--end::Wrapper-->
                          </form>
                          <!--end::Form-->
                        </div>
                        <!--end::Card body-->
                      </div>
                      <!--end::Card-->
                    </div>
                    <!--end::Content-->
                    <!--begin::Sidebar-->
                    <div class="flex-lg-auto min-w-lg-300px">
                      <!--begin::Card-->
                      <div
                        class="card"
                        data-kt-sticky="true"
                        data-kt-sticky-name="invoice"
                        data-kt-sticky-offset="{default: false, lg: '200px'}"
                        data-kt-sticky-width="{lg: '250px', lg: '300px'}"
                        data-kt-sticky-left="auto"
                        data-kt-sticky-top="150px"
                        data-kt-sticky-animation="false"
                        data-kt-sticky-zindex="95"
                      >
                        <!--begin::Card body-->
                        <div class="card-body p-10">
                          <!--begin::Input group-->
                          <div class="mb-10">
                            <!--begin::Label-->
                            <label class="form-label fw-bold fs-6 text-gray-700"
                              >Currency</label
                            >
                            <!--end::Label-->
                            <!--begin::Select-->
                            <select
                              name="currnecy"
                              aria-label="Select a Timezone"
                              data-control="select2"
                              data-placeholder="Select currency"
                              class="form-select form-select-solid"
                            >
                              <option value=""></option>
                              <option
                                data-kt-flag="flags/united-states.svg"
                                value="USD"
                              >
                                <b>USD</b>&nbsp;-&nbsp;USA dollar
                              </option>
                              <option
                                data-kt-flag="flags/united-kingdom.svg"
                                value="GBP"
                              >
                                <b>GBP</b>&nbsp;-&nbsp;British pound
                              </option>
                              <option
                                data-kt-flag="flags/australia.svg"
                                value="AUD"
                              >
                                <b>AUD</b>&nbsp;-&nbsp;Australian dollar
                              </option>
                              <option
                                data-kt-flag="flags/japan.svg"
                                value="JPY"
                              >
                                <b>JPY</b>&nbsp;-&nbsp;Japanese yen
                              </option>
                              <option
                                data-kt-flag="flags/sweden.svg"
                                value="SEK"
                              >
                                <b>SEK</b>&nbsp;-&nbsp;Swedish krona
                              </option>
                              <option
                                data-kt-flag="flags/canada.svg"
                                value="CAD"
                              >
                                <b>CAD</b>&nbsp;-&nbsp;Canadian dollar
                              </option>
                              <option
                                data-kt-flag="flags/switzerland.svg"
                                value="CHF"
                              >
                                <b>CHF</b>&nbsp;-&nbsp;Swiss franc
                              </option>
                            </select>
                            <!--end::Select-->
                          </div>
                          <!--end::Input group-->
                          <!--begin::Separator-->
                          <div class="separator separator-dashed mb-8"></div>
                          <!--end::Separator-->
                          <!--begin::Input group-->
                          <div class="mb-8">
                            <!--begin::Option-->
                            <label
                              class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack mb-5"
                            >
                              <span
                                class="form-check-label ms-0 fw-bold fs-6 text-gray-700"
                                >Payment method</span
                              >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                checked="checked"
                                value=""
                              />
                            </label>
                            <!--end::Option-->
                            <!--begin::Option-->
                            <label
                              class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack mb-5"
                            >
                              <span
                                class="form-check-label ms-0 fw-bold fs-6 text-gray-700"
                                >Late fees</span
                              >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                            </label>
                            <!--end::Option-->
                            <!--begin::Option-->
                            <label
                              class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack"
                            >
                              <span
                                class="form-check-label ms-0 fw-bold fs-6 text-gray-700"
                                >Notes</span
                              >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                              />
                            </label>
                            <!--end::Option-->
                          </div>
                          <!--end::Input group-->
                          <!--begin::Separator-->
                          <div class="separator separator-dashed mb-8"></div>
                          <!--end::Separator-->
                          <!--begin::Actions-->
                          <div class="mb-0">
                            <!--begin::Row-->
                            <div class="row mb-5">
                              <!--begin::Col-->
                              <div class="col">
                                <a
                                  href="#"
                                  class="btn btn-light btn-active-light-primary w-100"
                                  >Download</a
                                >
                              </div>
                              <!--end::Col-->
                            </div>
                            <!--end::Row-->
                            <button
                              type="submit"
                              href="#"
                              class="btn btn-primary w-100"
                              id="kt_invoice_submit_button"
                            >
                              <i class="ki-duotone ki-triangle fs-3">
                                <span class="path1"></span>
                                <span class="path2"></span>
                                <span class="path3"></span> </i
                              >Guardar
                            </button>
                          </div>
                          <!--end::Actions-->
                        </div>
                        <!--end::Card body-->
                      </div>
                      <!--end::Card-->
                    </div>
                    <!--end::Sidebar-->
                  </div>
                  <!--end::Layout-->
                </div>
                <!--end::Content container-->
              </div>
              <!--end::Content-->
            </div>
            <!--end::Content wrapper-->
            <!--begin::Footer-->
            <div id="kt_app_footer" class="app-footer">
              <!--begin::Footer container-->
              <div
                class="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3"
              >
                <!--begin::Copyright-->
                <div class="text-gray-900 order-2 order-md-1">
                  <span class="text-muted fw-semibold me-1">2024&copy;</span>
                  <a
                    href="Acubamos"
                    target="_blank"
                    class="text-gray-800 text-hover-primary"
                    >Acubamos</a
                  >
                </div>
                <!--end::Copyright-->
              </div>
              <!--end::Footer container-->
            </div>
            <!--end::Footer-->
          </div>
          <!--end:::Main-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Page-->
    </div>
    <!--end::App-->
    <!--begin::Drawers-->
    <!--begin::Activities drawer-->

    <!--end::Custom Javascript-->
    <!--end::Javascript-->
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
