<template>
    <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
			<!--begin::Page-->
			<div class="app-page flex-column flex-column-fluid" id="kt_app_page">
				<!--begin::Header-->
				
				<!--end::Header-->
				<!--begin::Wrapper-->
				<!--<div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">-->
					<!--begin::Sidebar-->
					
					<!--end::Sidebar-->
					<!--begin::Main-->
					<div class="app-main flex-column flex-row-fluid" id="kt_app_main">
						<!--begin::Content wrapper-->
						<div class="d-flex flex-column flex-column-fluid">
							<!--begin::Toolbar-->
							
							<!--end::Toolbar-->
							<!--begin::Content-->
							<div id="kt_app_content" class="app-content flex-column-fluid">
								<!--begin::Content container-->
								<div id="kt_app_content_container" class="app-container container-xxl">
									
									<!--begin::Statements-->
									<div class="card">
										<!--begin::Header-->
										<div class="card-header card-header-stretch">
											<!--begin::Title-->
											<div class="card-title">
												<h3 class="m-0 text-gray-800">Statement</h3>
											</div>
											<!--end::Title-->
											<!--begin::Toolbar-->
											<div class="card-toolbar m-0">
												<!--begin::Tab nav-->
												<ul class="nav nav-stretch fs-5 fw-semibold nav-line-tabs border-transparent" role="tablist">
													<li class="nav-item" role="presentation">
														<a id="kt_referrals_year_tab" class="nav-link text-active-gray-800 active" data-bs-toggle="tab" role="tab" href="#kt_referrals_1">This Year</a>
													</li>
													<li class="nav-item" role="presentation">
														<a id="kt_referrals_2019_tab" class="nav-link text-active-gray-800 me-4" data-bs-toggle="tab" role="tab" href="#kt_referrals_2">2023</a>
													</li>
													<li class="nav-item" role="presentation">
														<a id="kt_referrals_2018_tab" class="nav-link text-active-gray-800 me-4" data-bs-toggle="tab" role="tab" href="#kt_referrals_3">2022</a>
													</li>
													<li class="nav-item" role="presentation">
														<a id="kt_referrals_2017_tab" class="nav-link text-active-gray-800 ms-8" data-bs-toggle="tab" role="tab" href="#kt_referrals_4">2021</a>
													</li>
												</ul>
												<!--end::Tab nav-->
											</div>
											<!--end::Toolbar-->
										</div>
										<!--end::Header-->
										<!--begin::Tab Content-->
										<div id="kt_referred_users_tab_content" class="tab-content">
											<!--begin::Tab panel-->
											<div id="kt_referrals_1" class="card-body p-0 tab-pane fade show active" role="tabpanel">
												<div class="table-responsive">
													<!--begin::Table-->
													<table class="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
														<!--begin::Thead-->
														<thead class="border-gray-200 fs-5 fw-semibold bg-lighten">
															<tr>
																<th class="min-w-175px ps-9">Date</th>
																<th class="min-w-150px px-0">Order ID</th>
																<th class="min-w-350px">Details</th>
																<th class="min-w-125px">Amount</th>
																<th class="min-w-125px text-center">Invoice</th>
															</tr>
														</thead>
														<!--end::Thead-->
														<!--begin::Tbody-->
														<tbody class="fs-6 fw-semibold text-gray-600">
															<tr>
																<td class="ps-9">Nov 01, 2020</td>
																<td class="ps-0">102445788</td>
																<td>Darknight transparency 36 Icons Pack</td>
																<td class="text-success">$38.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Oct 24, 2020</td>
																<td class="ps-0">423445721</td>
																<td>Seller Fee</td>
																<td class="text-danger">$-2.60</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Oct 08, 2020</td>
																<td class="ps-0">312445984</td>
																<td>Cartoon Mobile Emoji Phone Pack</td>
																<td class="text-success">$76.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Sep 15, 2020</td>
																<td class="ps-0">312445984</td>
																<td>Iphone 12 Pro Mockup Mega Bundle</td>
																<td class="text-success">$5.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">May 30, 2020</td>
																<td class="ps-0">523445943</td>
																<td>Seller Fee</td>
																<td class="text-danger">$-1.30</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Apr 22, 2020</td>
																<td class="ps-0">231445943</td>
																<td>Parcel Shipping / Delivery Service App</td>
																<td class="text-success">$204.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Feb 09, 2020</td>
																<td class="ps-0">426445943</td>
																<td>Visual Design Illustration</td>
																<td class="text-success">$31.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Nov 01, 2020</td>
																<td class="ps-0">984445943</td>
																<td>Abstract Vusial Pack</td>
																<td class="text-success">$52.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Jan 04, 2020</td>
																<td class="ps-0">324442313</td>
																<td>Seller Fee</td>
																<td class="text-danger">$-0.80</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
														</tbody>
														<!--end::Tbody-->
													</table>
													<!--end::Table-->
												</div>
											</div>
											<!--end::Tab panel-->
											<!--begin::Tab panel-->
											<div id="kt_referrals_2" class="card-body p-0 tab-pane fade" role="tabpanel">
												<div class="table-responsive">
													<!--begin::Table-->
													<table class="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
														<!--begin::Thead-->
														<thead class="border-gray-200 fs-5 fw-semibold bg-lighten">
															<tr>
																<th class="min-w-175px ps-9">Date</th>
																<th class="min-w-150px px-0">Order ID</th>
																<th class="min-w-350px">Details</th>
																<th class="min-w-125px">Amount</th>
																<th class="min-w-125px text-center">Invoice</th>
															</tr>
														</thead>
														<!--end::Thead-->
														<!--begin::Tbody-->
														<tbody class="fs-6 fw-semibold text-gray-600">
															<tr>
																<td class="ps-9">May 30, 2020</td>
																<td class="ps-0">523445943</td>
																<td>Seller Fee</td>
																<td class="text-danger">$-1.30</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Apr 22, 2020</td>
																<td class="ps-0">231445943</td>
																<td>Parcel Shipping / Delivery Service App</td>
																<td class="text-success">$204.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Feb 09, 2020</td>
																<td class="ps-0">426445943</td>
																<td>Visual Design Illustration</td>
																<td class="text-success">$31.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Nov 01, 2020</td>
																<td class="ps-0">984445943</td>
																<td>Abstract Vusial Pack</td>
																<td class="text-success">$52.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Jan 04, 2020</td>
																<td class="ps-0">324442313</td>
																<td>Seller Fee</td>
																<td class="text-danger">$-0.80</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Nov 01, 2020</td>
																<td class="ps-0">102445788</td>
																<td>Darknight transparency 36 Icons Pack</td>
																<td class="text-success">$38.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Oct 24, 2020</td>
																<td class="ps-0">423445721</td>
																<td>Seller Fee</td>
																<td class="text-danger">$-2.60</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Oct 08, 2020</td>
																<td class="ps-0">312445984</td>
																<td>Cartoon Mobile Emoji Phone Pack</td>
																<td class="text-success">$76.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Sep 15, 2020</td>
																<td class="ps-0">312445984</td>
																<td>Iphone 12 Pro Mockup Mega Bundle</td>
																<td class="text-success">$5.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
														</tbody>
														<!--end::Tbody-->
													</table>
													<!--end::Table-->
												</div>
											</div>
											<!--end::Tab panel-->
											<!--begin::Tab panel-->
											<div id="kt_referrals_3" class="card-body p-0 tab-pane fade" role="tabpanel">
												<div class="table-responsive">
													<!--begin::Table-->
													<table class="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
														<!--begin::Thead-->
														<thead class="border-gray-200 fs-5 fw-semibold bg-lighten">
															<tr>
																<th class="min-w-175px ps-9">Date</th>
																<th class="min-w-150px px-0">Order ID</th>
																<th class="min-w-350px">Details</th>
																<th class="min-w-125px">Amount</th>
																<th class="min-w-125px text-center">Invoice</th>
															</tr>
														</thead>
														<!--end::Thead-->
														<!--begin::Tbody-->
														<tbody class="fs-6 fw-semibold text-gray-600">
															<tr>
																<td class="ps-9">Feb 09, 2020</td>
																<td class="ps-0">426445943</td>
																<td>Visual Design Illustration</td>
																<td class="text-success">$31.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Nov 01, 2020</td>
																<td class="ps-0">984445943</td>
																<td>Abstract Vusial Pack</td>
																<td class="text-success">$52.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Jan 04, 2020</td>
																<td class="ps-0">324442313</td>
																<td>Seller Fee</td>
																<td class="text-danger">$-0.80</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Sep 15, 2020</td>
																<td class="ps-0">312445984</td>
																<td>Iphone 12 Pro Mockup Mega Bundle</td>
																<td class="text-success">$5.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Nov 01, 2020</td>
																<td class="ps-0">102445788</td>
																<td>Darknight transparency 36 Icons Pack</td>
																<td class="text-success">$38.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Oct 24, 2020</td>
																<td class="ps-0">423445721</td>
																<td>Seller Fee</td>
																<td class="text-danger">$-2.60</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Oct 08, 2020</td>
																<td class="ps-0">312445984</td>
																<td>Cartoon Mobile Emoji Phone Pack</td>
																<td class="text-success">$76.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">May 30, 2020</td>
																<td class="ps-0">523445943</td>
																<td>Seller Fee</td>
																<td class="text-danger">$-1.30</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Apr 22, 2020</td>
																<td class="ps-0">231445943</td>
																<td>Parcel Shipping / Delivery Service App</td>
																<td class="text-success">$204.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
														</tbody>
														<!--end::Tbody-->
													</table>
													<!--end::Table-->
												</div>
											</div>
											<!--end::Tab panel-->
											<!--begin::Tab panel-->
											<div id="kt_referrals_4" class="card-body p-0 tab-pane fade" role="tabpanel">
												<div class="table-responsive">
													<!--begin::Table-->
													<table class="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
														<!--begin::Thead-->
														<thead class="border-gray-200 fs-5 fw-semibold bg-lighten">
															<tr>
																<th class="min-w-175px ps-9">Date</th>
																<th class="min-w-150px px-0">Order ID</th>
																<th class="min-w-350px">Details</th>
																<th class="min-w-125px">Amount</th>
																<th class="min-w-125px text-center">Invoice</th>
															</tr>
														</thead>
														<!--end::Thead-->
														<!--begin::Tbody-->
														<tbody class="fs-6 fw-semibold text-gray-600">
															<tr>
																<td class="ps-9">Nov 01, 2020</td>
																<td class="ps-0">102445788</td>
																<td>Darknight transparency 36 Icons Pack</td>
																<td class="text-success">$38.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Oct 24, 2020</td>
																<td class="ps-0">423445721</td>
																<td>Seller Fee</td>
																<td class="text-danger">$-2.60</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Nov 01, 2020</td>
																<td class="ps-0">102445788</td>
																<td>Darknight transparency 36 Icons Pack</td>
																<td class="text-success">$38.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Oct 24, 2020</td>
																<td class="ps-0">423445721</td>
																<td>Seller Fee</td>
																<td class="text-danger">$-2.60</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Feb 09, 2020</td>
																<td class="ps-0">426445943</td>
																<td>Visual Design Illustration</td>
																<td class="text-success">$31.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Nov 01, 2020</td>
																<td class="ps-0">984445943</td>
																<td>Abstract Vusial Pack</td>
																<td class="text-success">$52.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Jan 04, 2020</td>
																<td class="ps-0">324442313</td>
																<td>Seller Fee</td>
																<td class="text-danger">$-0.80</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Oct 08, 2020</td>
																<td class="ps-0">312445984</td>
																<td>Cartoon Mobile Emoji Phone Pack</td>
																<td class="text-success">$76.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
															<tr>
																<td class="ps-9">Oct 08, 2020</td>
																<td class="ps-0">312445984</td>
																<td>Cartoon Mobile Emoji Phone Pack</td>
																<td class="text-success">$76.00</td>
																<td class="text-center">
																	<button class="btn btn-light btn-sm btn-active-light-primary">Download</button>
																</td>
															</tr>
														</tbody>
														<!--end::Tbody-->
													</table>
													<!--end::Table-->
												</div>
											</div>
											<!--end::Tab panel-->
										</div>
										<!--end::Tab Content-->
									</div>
									<!--end::Statements-->
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
		<!--</div>-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
//import KTChartWidget1 from "@/components/widgets/charts/Widget1.vue";
//import KTListWidget5 from "@/components/widgets/lists/Widget5.vue";
//import KTTableWidget5 from "@/components/widgets/tables/Widget5.vue";
//import KTListWidget1 from "@/components/widgets/lists/Widget1.vue";

export default defineComponent({
  name: "account-statements",
  components: {
   // KTChartWidget1,
   // KTListWidget5,
   // KTTableWidget5,
   // KTListWidget1,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
