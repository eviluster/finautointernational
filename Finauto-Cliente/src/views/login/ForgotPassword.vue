<template>
	<!--begin::Login forgot password form-->
	<div class="login-forgot">
		<div class="mb-20">
			<h3 class="opacity-40 font-weight-normal">¿Olvidó su contraseña?</h3>
			<p class="opacity-40">Introduzca su correo electrónico para resetear su contraseña</p>
		</div>
		<form class="form" id="kt_login_forgot_form">
			<div class="form-group mb-10">
				<input class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8" type="text"
					placeholder="Email" name="email" autocomplete="off" />
			</div>
			<div class="form-group">
				<button id="kt_login_forgot_submit"
					class="btn btn-pill btn-primary opacity-90 px-15 py-3 m-2">Solicitar</button>
				<button id="kt_login_forgot_cancel" class="btn btn-pill btn-outline-white opacity-70 px-15 py-3 m-2"
					>Cancelar</button>
			</div>
		</form>
	</div>
	<!--end::Login forgot password form-->
</template>

<script>
export default {
	name: 'ForgotPasswordForm',

};
</script>

<style scoped>
/*@import '../../assets/styles/login-5.css';*/
@import '../../assets/styles/style.bundle.css';
@import '../../assets/plugins/plugins.bundle.css';
@import '../../assets/plugins/prismjs.bundle.css';
.form-group{
	display: grid;
}

/* Estilos para tu nuevo layout */
</style>