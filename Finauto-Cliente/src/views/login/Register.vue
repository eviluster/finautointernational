<template>
	<!--begin::Login Sign up form-->
	<div class="login-signup">
		<div class="mb-20">
			<h3 class="opacity-40 font-weight-normal">Regístrese</h3>
			<p class="opacity-40">Introduzca sus datos para crear su cuenta</p>
		</div>
		<form class="form text-center" id="kt_login_signup_form">
			<div class="form-group">
				<input class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8" type="text"
					placeholder="Nombre y Apellidos" name="fullname" />
			</div>
			<div class="form-group">
				<input class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8" type="text"
					placeholder="Email" name="email" autocomplete="off" />
			</div>
			<div class="form-group">
				<input class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
					type="password" placeholder="Contraseña" name="password" />
			</div>
			<div class="form-group">
				<input class="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
					type="password" placeholder="Confirmar Contraseña" name="cpassword" />
			</div>
			<div class="form-group text-left px-8">
				<div class="checkbox-inline">
					<label class="checkbox checkbox-outline checkbox-white opacity-60 text-white m-0">
						<input type="checkbox" name="agree" />
						<span></span>Estoy de acuerdo con los
						<a href="#" class="text-white font-weight-bold ml-1">terminos y condiciones</a>.</label>
				</div>
				<div class="form-text text-muted text-center"></div>
			</div>
			<div class="form-group">
				<button id="kt_login_signup_submit"
					class="btn btn-pill btn-primary opacity-90 px-15 py-3 m-2">Registrarse</button>
				<button id="kt_login_signup_cancel" class="btn btn-pill btn-outline-white opacity-70 px-15 py-3 m-2"
					>Cancelar</button>
			</div>
		</form>
	</div>
	<!--end::Login Sign up form-->
</template>

<script>
export default {
    name: 'Register'
}
</script>

<style scoped>
/*@import '../../assets/styles/login-5.css';*/
@import '../../assets/styles/style.bundle.css';

/* Estilos para tu nuevo layout */
</style>