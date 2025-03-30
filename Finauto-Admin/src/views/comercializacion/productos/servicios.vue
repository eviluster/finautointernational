<template>
	<div class="d-flex flex-column flex-root app-root" id="kt_app_root">
		<!--begin::Page-->
		<div class="app-page flex-column flex-column-fluid" id="kt_app_page">
			
			<!--begin::Wrapper-->
			<div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">

				<!--begin::Main-->
				<div class="app-main flex-column flex-row-fluid" id="kt_app_main">
					<!--begin::Content wrapper-->
					<div class="d-flex flex-column flex-column-fluid">
						<!--begin::Toolbar-->
						<div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
							<!--begin::Toolbar container-->
							<div id="kt_app_toolbar_container" class="app-container container-xxl d-flex flex-stack">
								<!--begin::Page title-->
								<div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
									<!--begin::Title-->
									<h1
										class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
										Product Form</h1>
									<!--end::Title-->
									<!--begin::Breadcrumb-->
									<ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
										<!--begin::Item-->
										<li class="breadcrumb-item text-muted">
											<a href="index.html" class="text-muted text-hover-primary">Home</a>
										</li>
										<!--end::Item-->
										<!--begin::Item-->
										<li class="breadcrumb-item">
											<span class="bullet bg-gray-500 w-5px h-2px"></span>
										</li>
										<!--end::Item-->
										<!--begin::Item-->
										<li class="breadcrumb-item text-muted">eCommerce</li>
										<!--end::Item-->
										<!--begin::Item-->
										<li class="breadcrumb-item">
											<span class="bullet bg-gray-500 w-5px h-2px"></span>
										</li>
										<!--end::Item-->
										<!--begin::Item-->
										<li class="breadcrumb-item text-muted">Catalog</li>
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
							<div id="kt_app_content_container" class="app-container container-xxl">
								<!--begin::Form-->
								<form id="kt_ecommerce_add_product_form" class="form d-flex flex-column flex-lg-row"
									data-kt-redirect="apps/ecommerce/catalog/products.html">
									
									<!--begin::Main column-->
									<div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
										<!--begin:::Tabs-->
										<ul
											class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-n2">
											<!--begin:::Tab item-->
											<li class="nav-item">
												<a class="nav-link text-active-primary pb-4 active" data-bs-toggle="tab"
													href="#kt_ecommerce_add_product_general">General</a>
											</li>
											<!--end:::Tab item-->
											
										</ul>
										<!--end:::Tabs-->
										<!--begin::Tab content-->
										<div class="tab-content">
											<!--begin::Tab pane-->
											<div class="tab-pane fade show active" id="kt_ecommerce_add_product_general"
												role="tab-panel">
												<div class="d-flex flex-column gap-7 gap-lg-10">
													<!--begin::General options-->
													<div class="card card-flush py-4">
														<!--begin::Card header-->
														<div class="card-header">
															<div class="card-title">
																<h2>General</h2>
															</div>
														</div>
														<!--end::Card header-->
														<!--begin::Card body-->
														<div class="card-body pt-0">
															<!--begin::Input group-->
															<div class="mb-10 fv-row">
																<!--begin::Label-->
																<label class="required form-label">Product Name</label>
																<!--end::Label-->
																<!--begin::Input-->
																<input type="text" name="product_name"
																	class="form-control mb-2" placeholder="Product name"
																	value="" />
																<!--end::Input-->
																<!--begin::Description-->
																<div class="text-muted fs-7">A product name is required
																	and recommended to be unique.</div>
																<!--end::Description-->

															</div>
															<!--end::Input group-->
															<!--begin::Input group-->
															<div>
																<!--begin::Label-->
																<label class="form-label">Description</label>
																<!--end::Label-->
																<!--begin::Editor-->
																<div id="kt_ecommerce_add_product_description"
																	name="kt_ecommerce_add_product_description"
																	class="min-h-200px mb-2"></div>
																<!--end::Editor-->
																<!--begin::Description-->
																<div class="text-muted fs-7">Set a description to the
																	product for better visibility.</div>
																<!--end::Description-->
															</div>
															<!--end::Input group-->
														</div>
														<!--end::Card header-->
													</div>
													<!--end::General options-->
													<!--begin::Media-->
													<div class="card card-flush py-4">
														<!--begin::Card header-->
														<div class="card-header">
															<div class="card-title">
																<h2>Media</h2>
															</div>
														</div>
														<!--end::Card header-->
														<!--begin::Card body-->
														<div class="card-body pt-0">
															<!--begin::Input group-->
															<div class="fv-row mb-2">
																<!--begin::Dropzone-->
																<div class="dropzone"
																	id="kt_ecommerce_add_product_media">
																	<!--begin::Message-->
																	<div class="dz-message needsclick">
																		<!--begin::Icon-->
																		<i
																			class="ki-duotone ki-file-up text-primary fs-3x">
																			<span class="path1"></span>
																			<span class="path2"></span>
																		</i>
																		<!--end::Icon-->
																		<!--begin::Info-->
																		<div class="ms-4">
																			<h3 class="fs-5 fw-bold text-gray-900 mb-1">
																				Drop files here or click to upload.</h3>
																			<span
																				class="fs-7 fw-semibold text-gray-500">Upload
																				up to 10 files</span>
																		</div>
																		<!--end::Info-->
																	</div>
																</div>
																<!--end::Dropzone-->
															</div>
															<!--end::Input group-->
															<!--begin::Description-->
															<div class="text-muted fs-7">Set the product media gallery.
															</div>
															<!--end::Description-->
														</div>
														<!--end::Card header-->
													</div>
													<!--end::Media-->
													<!--begin::Pricing-->
													<div class="card card-flush py-4">
														<!--begin::Card header-->
														<div class="card-header">
															<div class="card-title">
																<h2>Pricing</h2>
															</div>
														</div>
														<!--end::Card header-->
														<!--begin::Card body-->
														<div class="card-body pt-0">
															<!--begin::Input group-->
															<div class="mb-10 fv-row">
																<!--begin::Label-->
																<label class="required form-label">Base Price</label>
																<!--end::Label-->
																<!--begin::Input-->
																<input type="text" name="price"
																	class="form-control mb-2"
																	placeholder="Product price" value="" />
																<!--end::Input-->
																<!--begin::Description-->
																<div class="text-muted fs-7">Set the product price.
																</div>
																<!--end::Description-->
															</div>
															<!--end::Input group-->

															<!--begin::Input group-->
															<div class="d-none mb-10 fv-row"
																id="kt_ecommerce_add_product_discount_percentage">
																<!--begin::Label-->
																<label class="form-label">Set Discount
																	Percentage</label>
																<!--end::Label-->
																<!--begin::Slider-->
																<div class="d-flex flex-column text-center mb-5">
																	<div
																		class="d-flex align-items-start justify-content-center mb-7">
																		<span class="fw-bold fs-3x"
																			id="kt_ecommerce_add_product_discount_label">0</span>
																		<span class="fw-bold fs-4 mt-1 ms-2">%</span>
																	</div>
																	<div id="kt_ecommerce_add_product_discount_slider"
																		class="noUi-sm"></div>
																</div>
																<!--end::Slider-->
																<!--begin::Description-->
																<div class="text-muted fs-7">Set a percentage discount
																	to be applied on this product.</div>
																<!--end::Description-->
															</div>
															<!--end::Input group-->
															<!--begin::Input group-->


														</div>
														<!--end::Card header-->
													</div>
													<!--end::Pricing-->
												</div>
											</div>
											<!--end::Tab pane-->
											
										</div>
										<!--end::Tab content-->
										<div class="d-flex justify-content-end">
											<!--begin::Button-->
											<a href="apps/ecommerce/catalog/products.html"
												id="kt_ecommerce_add_product_cancel"
												class="btn btn-light me-5">Cancel</a>
											<!--end::Button-->
											<!--begin::Button-->
											<button type="submit" id="kt_ecommerce_add_product_submit"
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
					<!--begin::Footer-->

				</div>
				<!--end::Footer-->
			</div>
			<!--end:::Main-->
		</div>
		<!--end::Wrapper-->
	</div>
	<!--end::Page-->
</template>