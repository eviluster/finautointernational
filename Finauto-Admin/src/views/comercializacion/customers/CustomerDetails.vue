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

            <!--end::Avatar-->

            <!--begin::Name-->
            <a
              v-if="customerDetails"
              nolink
              class="fs-2 text-gray-800 text-hover-primary fw-bold mb-1"
            >
              {{ customerDetails.name.es }}
            </a>
            <!--end::Name-->

            <!--begin::Position-->

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
          <div
            id="kt_customer_view_details"
            class="collapse show"
            v-if="customerDetails"
          >
            <div class="py-5 fs-6">
              <!--begin::Badge-->

              <!--begin::Badge-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Account ID</div>
              <div class="text-gray-600">ID-{{ customerDetails.id }}</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Billing Email</div>
              <div class="text-gray-600">
                {{ customerDetails.email }}
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Billing Address</div>
              <div class="text-gray-600">
                {{ customerDetails.addessLineOne }}
              </div>
              <div class="text-gray-600" v-if="customerDetails.addressLineTwo">
                {{ customerDetails.addressLineTwo }}
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

<script setup>
import { defineComponent, onMounted, ref } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import NewCardModal from "@/components/modals/forms/NewCardModal.vue";
import PaymentRecords from "@/components/customers/cards/overview/PaymentRecords.vue";
import PaymentMethods from "@/components/customers/cards/overview/PaymentMethods.vue";
import Earnings from "@/components/customers/cards/statments/Earnings.vue";
import api from "@/services/api";
// Define los props esperados en el componente
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
const customerDetails = ref(null);

const getDataCustomer = async () => {
  const payload = {
    queryType: "one",
    id: props.id,
    skip: 0,
    take: 10,
  };
  try {
    const response = await api.post("/customer/search", payload);
    if (response.data.isSuccess) {
      customerDetails.value = response.data.data[0];
      console.log(customerDetails.value.cityTown);
    } else {
      customerDetails.value = null;
    }
  } catch (error) {
    console.error("Error al obtener los detalles del cliente:", error);
    customerDetails.value = null;
  }
};
// Utiliza el parámetro "id" en el hook onMounted o en cualquier otra parte de la lógica del componente
onMounted(() => {
  console.log("El ID del cliente es:", props.id);
  getDataCustomer();
});
</script>
