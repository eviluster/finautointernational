<template>
    <!--begin::App-->
    <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
        <!--begin::Page-->
        <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
            <!--begin::Header-->
            <div id="kt_app_header" class="app-header" data-kt-sticky="true"
                data-kt-sticky-activate="{default: true, lg: true}" data-kt-sticky-name="app-header-minimize"
                data-kt-sticky-offset="{default: '200px', lg: '0'}" data-kt-sticky-animation="false">
                <!--begin::Header container-->
                <div class="app-container container-fluid d-flex align-items-stretch justify-content-between"
                    id="kt_app_header_container">


                    <!--begin::Header wrapper-->
                    <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
                        id="kt_app_header_wrapper">
                        <!--begin::Menu wrapper-->

                    </div>
                    <!--end::Header wrapper-->
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

                        <!--begin::Content-->
                        <div id="kt_app_content" class="app-content flex-column-fluid">
                            <!--begin::Content container-->
                            <div id="kt_app_content_container" class="app-container container-xxl">
                                <!--begin::Form-->
                                <form id="kt_ecommerce_edit_order_form" class="form d-flex flex-column flex-lg-row"
                                    data-kt-redirect="apps/ecommerce/sales/listing.html">
                                    <!--begin::Aside column-->
                                    <div class="w-100 flex-lg-row-auto w-lg-300px mb-7 me-7 me-lg-10">
                                        <!--begin::Order details-->
                                        <div class="card card-flush py-4">
                                            <!--begin::Card header-->
                                            <div class="card-header">
                                                <div class="card-title">
                                                    <h2>Order Details</h2>
                                                </div>
                                            </div>
                                            <!--end::Card header-->
                                            <!--begin::Card body-->
                                            <div class="card-body pt-0">
                                                <div class="d-flex flex-column gap-10">
                                                    <!--begin::Input group-->
                                                    <div class="fv-row">
                                                        <!--begin::Label-->
                                                        <label class="form-label">Order ID</label>
                                                        <!--end::Label-->
                                                        <!--begin::Auto-generated ID-->
                                                        <div class="fw-bold fs-3">#13435</div>
                                                        <!--end::Input-->
                                                    </div>
                                                    <!--end::Input group-->
                                                    <!--begin::Input group-->
                                                    <div class="fv-row">
                                                        <!--begin::Label-->
                                                        <label class="required form-label">Payment Method</label>
                                                        <!--end::Label-->
                                                        <!--begin::Select2-->
                                                        <select class="form-select mb-2" data-control="select2"
                                                            data-hide-search="true" data-placeholder="Select an option"
                                                            name="payment_method" id="kt_ecommerce_edit_order_payment">
                                                            <option></option>
                                                            <option value="cod">Cash on Delivery</option>
                                                            <option value="visa">Credit Card (Visa)</option>
                                                            <option value="mastercard">Credit Card (Mastercard)</option>
                                                            <option value="paypal">Paypal</option>
                                                        </select>
                                                        <!--end::Select2-->
                                                        <!--begin::Description-->
                                                        <div class="text-muted fs-7">Set the date of the order to
                                                            process.</div>
                                                        <!--end::Description-->
                                                    </div>
                                                    <!--end::Input group-->
                                                    <!--begin::Input group-->
                                                    <div class="fv-row">
                                                        <!--begin::Label-->
                                                        <label class="required form-label">Shipping Method</label>
                                                        <!--end::Label-->
                                                        <!--begin::Select2-->
                                                        <select class="form-select mb-2" data-control="select2"
                                                            data-hide-search="true" data-placeholder="Select an option"
                                                            name="shipping_method"
                                                            id="kt_ecommerce_edit_order_shipping">
                                                            <option></option>
                                                            <option value="none">N/A - Virtual Product</option>
                                                            <option value="standard">Standard Rate</option>
                                                            <option value="express">Express Rate</option>
                                                            <option value="speed">Speed Overnight Rate</option>
                                                        </select>
                                                        <!--end::Select2-->
                                                        <!--begin::Description-->
                                                        <div class="text-muted fs-7">Set the date of the order to
                                                            process.</div>
                                                        <!--end::Description-->
                                                    </div>
                                                    <!--end::Input group-->
                                                    <!--begin::Input group-->
                                                    <div class="fv-row">
                                                        <!--begin::Label-->
                                                        <label class="required form-label">Order Date</label>
                                                        <!--end::Label-->
                                                        <!--begin::Editor-->
                                                        <input id="kt_ecommerce_edit_order_date" name="order_date"
                                                            placeholder="Select a date" class="form-control mb-2"
                                                            value="" />
                                                        <!--end::Editor-->
                                                        <!--begin::Description-->
                                                        <div class="text-muted fs-7">Set the date of the order to
                                                            process.</div>
                                                        <!--end::Description-->
                                                    </div>
                                                    <!--end::Input group-->
                                                </div>
                                            </div>
                                            <!--end::Card header-->
                                        </div>
                                        <!--end::Order details-->
                                    </div>
                                    <!--end::Aside column-->
                                    <!--begin::Main column-->
                                    <div class="d-flex flex-column flex-lg-row-fluid gap-7 gap-lg-10">
                                        <!--begin::Order details-->
                                        <div class="card card-flush py-4">
                                            <!--begin::Card header-->
                                            <div class="card-header">
                                                <div class="card-title">
                                                    <h2>Select Products</h2>
                                                </div>
                                            </div>
                                            <!--end::Card header-->
                                            <!--begin::Card body-->
                                            <div class="card-body pt-0">
                                                <div class="d-flex flex-column gap-10">
                                                    <!--begin::Input group-->
                                                    <div>
                                                        <!--begin::Label-->
                                                        <label class="form-label">Add products to this order</label>
                                                        <!--end::Label-->
                                                        <!--begin::Selected products-->
                                                        <div class="row row-cols-1 row-cols-xl-3 row-cols-md-2 border border-dashed rounded pt-3 pb-1 px-2 mb-5 mh-300px overflow-scroll"
                                                            id="kt_ecommerce_edit_order_selected_products">
                                                            <!--begin::Empty message-->
                                                            <span class="w-100 text-muted">Select one or more products
                                                                from the list below by ticking the checkbox.</span>
                                                            <!--end::Empty message-->
                                                        </div>
                                                        <!--begin::Selected products-->
                                                        <!--begin::Total price-->
                                                        <div class="fw-bold fs-4">Total Cost: $
                                                            <span id="kt_ecommerce_edit_order_total_price">0.00</span>
                                                        </div>
                                                        <!--end::Total price-->
                                                    </div>
                                                    <!--end::Input group-->
                                                    <!--begin::Separator-->
                                                    <div class="separator"></div>
                                                    <!--end::Separator-->
                                                    <!--begin::Search products-->
                                                    <div class="d-flex align-items-center position-relative mb-n7">
                                                        <i class="ki-duotone ki-magnifier fs-3 position-absolute ms-4">
                                                            <span class="path1"></span>
                                                            <span class="path2"></span>
                                                        </i>
                                                        <input type="text" data-kt-ecommerce-edit-order-filter="search"
                                                            class="form-control form-control-solid w-100 w-lg-50 ps-12"
                                                            placeholder="Search Products" />
                                                    </div>
                                                    <!--end::Search products-->
                                                    <!--begin::Table-->
                                                    <table class="table align-middle table-row-dashed fs-6 gy-5"
                                                        id="kt_ecommerce_edit_order_product_table">
                                                        <thead>
                                                            <tr
                                                                class="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                                                                <th class="w-25px pe-2"></th>
                                                                <th class="min-w-200px">Product</th>
                                                                <th class="min-w-100px text-end pe-5">Qty Remaining</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="fw-semibold text-gray-600">
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_1">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/1.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                1</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">77.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 01481005
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="44">
                                                                    <span class="fw-bold ms-3">44</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_2">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/2.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                2</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">81.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 02178007
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="7">
                                                                    <span class="badge badge-light-warning">Low
                                                                        stock</span>
                                                                    <span class="fw-bold text-warning ms-3">7</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_3">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/3.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                3</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">190.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 03826009
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="12">
                                                                    <span class="fw-bold ms-3">12</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_4">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/4.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                4</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">95.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 04697006
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="42">
                                                                    <span class="fw-bold ms-3">42</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_5">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/5.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                5</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">193.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 03776001
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="37">
                                                                    <span class="fw-bold ms-3">37</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                            

                                                                <td class="text-end pe-5" data-order="49">
                                                                    <span class="fw-bold ms-3">49</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_7">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/7.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                7</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">92.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 01459009
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="41">
                                                                    <span class="fw-bold ms-3">41</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_8">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/8.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                8</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">17.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 02948002
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="43">
                                                                    <span class="fw-bold ms-3">43</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_9">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/9.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                9</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">45.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 02828008
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="19">
                                                                    <span class="fw-bold ms-3">19</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_10">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/10.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                10</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">175.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 04754002
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="49">
                                                                    <span class="fw-bold ms-3">49</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_11">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/11.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                11</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">29.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 03574007
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="14">
                                                                    <span class="fw-bold ms-3">14</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_12">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/12.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                12</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">79.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 04959008
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="39">
                                                                    <span class="fw-bold ms-3">39</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_13">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/13.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                13</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">228.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 01238001
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="28">
                                                                    <span class="fw-bold ms-3">28</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_14">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/14.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                14</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">164.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 04264004
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="42">
                                                                    <span class="fw-bold ms-3">42</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_15">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/15.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                15</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">194.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 01655003
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="22">
                                                                    <span class="fw-bold ms-3">22</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_16">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/16.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                16</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">44.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 01134008
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="14">
                                                                    <span class="fw-bold ms-3">14</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_17">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/17.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                17</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">51.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 01967003
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="14">
                                                                    <span class="fw-bold ms-3">14</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_18">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/18.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                18</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">288.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 01881001
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="48">
                                                                    <span class="fw-bold ms-3">48</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_19">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/19.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                19</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">46.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 03263006
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="46">
                                                                    <span class="fw-bold ms-3">46</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_20">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/20.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                20</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">10.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 01116005
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="31">
                                                                    <span class="fw-bold ms-3">31</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_21">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/21.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                21</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">114.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 02859008
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="42">
                                                                    <span class="fw-bold ms-3">42</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_22">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/22.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                22</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">180.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 01806008
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="6">
                                                                    <span class="badge badge-light-warning">Low
                                                                        stock</span>
                                                                    <span class="fw-bold text-warning ms-3">6</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_23">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/23.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                23</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">294.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 04540003
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="11">
                                                                    <span class="fw-bold ms-3">11</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_24">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/24.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                24</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">130.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 04393007
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="11">
                                                                    <span class="fw-bold ms-3">11</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_25">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/25.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                25</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">86.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 01495001
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="41">
                                                                    <span class="fw-bold ms-3">41</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_26">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/26.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                26</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">299.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 04641002
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="32">
                                                                    <span class="fw-bold ms-3">32</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_27">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/27.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                27</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">142.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 04822006
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="34">
                                                                    <span class="fw-bold ms-3">34</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_28">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/28.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                28</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">42.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 02345001
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="6">
                                                                    <span class="badge badge-light-warning">Low
                                                                        stock</span>
                                                                    <span class="fw-bold text-warning ms-3">6</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_29">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/29.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                29</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">194.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 04165008
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="4">
                                                                    <span class="badge badge-light-warning">Low
                                                                        stock</span>
                                                                    <span class="fw-bold text-warning ms-3">4</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div
                                                                        class="form-check form-check-sm form-check-custom form-check-solid">
                                                                        <input class="form-check-input" type="checkbox"
                                                                            value="1" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div class="d-flex align-items-center"
                                                                        data-kt-ecommerce-edit-order-filter="product"
                                                                        data-kt-ecommerce-edit-order-id="product_30">
                                                                        <!--begin::Thumbnail-->
                                                                        <a href="apps/ecommerce/catalog/edit-product.html"
                                                                            class="symbol symbol-50px">
                                                                            <span class="symbol-label"
                                                                                style="background-image:url(assets/media//stock/ecommerce/30.png);"></span>
                                                                        </a>
                                                                        <!--end::Thumbnail-->
                                                                        <div class="ms-5">
                                                                            <!--begin::Title-->
                                                                            <a href="apps/ecommerce/catalog/edit-product.html"
                                                                                class="text-gray-800 text-hover-primary fs-5 fw-bold">Product
                                                                                30</a>
                                                                            <!--end::Title-->
                                                                            <!--begin::Price-->
                                                                            <div class="fw-semibold fs-7">Price: $
                                                                                <span
                                                                                    data-kt-ecommerce-edit-order-filter="price">160.00</span>
                                                                            </div>
                                                                            <!--end::Price-->
                                                                            <!--begin::SKU-->
                                                                            <div class="text-muted fs-7">SKU: 04501007
                                                                            </div>
                                                                            <!--end::SKU-->
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td class="text-end pe-5" data-order="11">
                                                                    <span class="fw-bold ms-3">11</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <!--end::Table-->
                                                </div>
                                            </div>
                                            <!--end::Card header-->
                                        </div>
                                        <!--end::Order details-->

                                        <div class="d-flex justify-content-end">
                                            <!--begin::Button-->
                                            <a href="apps/ecommerce/catalog/products.html"
                                                id="kt_ecommerce_edit_order_cancel"
                                                class="btn btn-light me-5">Cancel</a>
                                            <!--end::Button-->
                                            <!--begin::Button-->
                                            <button type="submit" id="kt_ecommerce_edit_order_submit"
                                                class="btn btn-primary">
                                                <span class="indicator-label">Save Changes</span>
                                                <span class="indicator-progress">Please wait...
                                                    <span
                                                        class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                            </button>
                                            <!--end::Button-->
                                        </div>
                                    </div>
                                    <!--end::Main column-->
                                </form>
                                <!--end::Form-->
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
    <!--end::App-->
</template>