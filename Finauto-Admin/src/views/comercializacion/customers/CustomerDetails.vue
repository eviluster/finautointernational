<template>
  <!--begin::Layout-->
  <div class="d-flex flex-column flex-xl-row">
    <!--begin::Sidebar-->
    <div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
      <!--begin::Card-->
      <div class="card mb-5 mb-xl-8">
        <!--begin::Card body-->
        <div class="card-body pt-15">
          <!--begin::Summary-->
          <div class="d-flex flex-center flex-column mb-5">
            <!--begin::Avatar-->
            <div class="symbol symbol-100px symbol-circle mb-7">
              <img :src="getAssetPath('media/avatars/300-1.jpg')" alt="image" />
            </div>
            <!--end::Avatar-->

            <!--begin::Name-->
            <a
              href="#"
              class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1"
            >
              Max Smith
            </a>
            <!--end::Name-->

            <!--begin::Position-->
            <div class="fs-5 fw-semibold text-muted mb-6">Software Enginer</div>
            <!--end::Position-->
          </div>
          <!--end::Summary-->

          <!--begin::Details toggle-->
          <div class="d-flex flex-stack fs-4 py-3">
            <div
              class="fw-bold rotate collapsible"
              data-bs-toggle="collapse"
              href="#kt_customer_view_details"
              role="button"
              aria-expanded="false"
              aria-controls="kt_customer_view_details"
            >
              Details
              <span class="ms-2 rotate-180">
                <KTIcon icon-name="down" icon-class="fs-3" />
              </span>
            </div>

            <span
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              title="Edit customer details"
            >
              <a
                href="#"
                class="btn btn-sm btn-light-primary"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_update_customer"
              >
                Edit
              </a>
            </span>
          </div>
          <!--end::Details toggle-->

          <div class="separator separator-dashed my-3"></div>

          <!--begin::Details content-->
          <div id="kt_customer_view_details" class="collapse show">
            <div class="py-5 fs-6">
              <!--begin::Badge-->
              <div class="badge badge-light-info d-inline">Premium user</div>
              <!--begin::Badge-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Account ID</div>
              <div class="text-gray-600">ID-45453423</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Billing Email</div>
              <div class="text-gray-600">
                <a href="#" class="text-gray-600 text-hover-primary"
                  >info@keenthemes.com</a
                >
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Billing Address</div>
              <div class="text-gray-600">
                101 Collin Street, <br />Melbourne 3000 VIC <br />Australia
              </div>

              <div class="fw-bold mt-5">Número de teléfono</div>
              <div class="text-gray-600">909 0932 90</div>
            </div>
          </div>
          <!--end::Details content-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Card-->

      <!--begin::Connected Accounts-->

      <!--end::Connected Accounts-->
    </div>
    <!--end::Sidebar-->

    <!--begin::Content-->
    <div class="flex-lg-row-fluid ms-lg-15">
      <!--begin:::Tabs-->
      <ul
        class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-8"
      >
        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4 active"
            data-bs-toggle="tab"
            href="#kt_customer_view_overview_tab"
            >Overview</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item ms-auto">
          <!--begin::Action menu-->
          <a
            href="#"
            class="btn btn-primary ps-7"
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
          >
            Dowload
            <KTIcon icon-name="download" icon-class="fs-2 me-0" />
          </a>
          <Dropdown3></Dropdown3>
          <!--end::Menu-->
        </li>
        <!--end:::Tab item-->
      </ul>
      <!--end:::Tabs-->

      <!--begin:::Tab content-->
      <div class="tab-content" id="myTabContent">
        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade show active"
          id="kt_customer_view_overview_tab"
          role="tabpanel"
        >
          <PaymentRecords card-classes="mb-6 mb-xl-9"></PaymentRecords>

          <PaymentMethods card-classes="mb-6 mb-xl-9"></PaymentMethods>
        </div>
        <!--end:::Tab pane-->
      </div>
      <!--end:::Tab content-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->

  <NewCardModal></NewCardModal>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import NewCardModal from "@/components/modals/forms/NewCardModal.vue";
import PaymentRecords from "@/components/customers/cards/overview/PaymentRecords.vue";
import PaymentMethods from "@/components/customers/cards/overview/PaymentMethods.vue";

import Earnings from "@/components/customers/cards/statments/Earnings.vue";

export default defineComponent({
  name: "customer-details",
  components: {
    PaymentRecords,
    PaymentMethods,
    Earnings,
    Dropdown3,
    NewCardModal,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
