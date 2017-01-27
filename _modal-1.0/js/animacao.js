// Seta a anicação na modal
function setaAnimacao(id_modal, animacao) {
	$('#' + id_modal + ' .modal-dialog').attr('class', 'modal-dialog  ' + animacao);
};


// Modal de-tras-para-tras
$('#de-tras-para-tras').on('show.bs.modal', function (e) {
	setaAnimacao("de-tras-para-tras", "de-tras");
});

$('#de-tras-para-tras').on('hide.bs.modal', function (e) {
	setaAnimacao("de-tras-para-tras","para-tras");
});


// Modal de-frente-para-frente
$('#de-frente-para-frente').on('show.bs.modal', function (e) {
	setaAnimacao("de-frente-para-frente", "de-frente");
});

$('#de-frente-para-frente').on('hide.bs.modal', function (e) {
	setaAnimacao("de-frente-para-frente","para-frente");
});


// Modal de-rotate90X-para-rotate90X
$('#de-rotate90X-para-rotate90X').on('show.bs.modal', function (e) {
	setaAnimacao("de-rotate90X-para-rotate90X", "de-rotate90X");
});

$('#de-rotate90X-para-rotate90X').on('hide.bs.modal', function (e) {
	setaAnimacao("de-rotate90X-para-rotate90X","para-rotate90X");
});


// Modal de-rotate90Y-para-rotate90Y
$('#de-rotate90Y-para-rotate90Y').on('show.bs.modal', function (e) {
	setaAnimacao("de-rotate90Y-para-rotate90Y", "de-rotate90Y");
});

$('#de-rotate90Y-para-rotate90Y').on('hide.bs.modal', function (e) {
	setaAnimacao("de-rotate90Y-para-rotate90Y","para-rotate90Y");
});


// Modal chacoalha
$('#chacoalha').on('show.bs.modal', function (e) {
	setaAnimacao("chacoalha", "chacoalha");
});


// Modal de-aparece-para-some
$('#de-aparece-para-some').on('show.bs.modal', function (e) {
	setaAnimacao("de-aparece-para-some", "de-aparece");
});

$('#de-aparece-para-some').on('hide.bs.modal', function (e) {
	setaAnimacao("de-aparece-para-some","para-some");
});


// Modal pulsar
$('#pulsar').on('show.bs.modal', function (e) {
	setaAnimacao("pulsar", "pulsar");
});