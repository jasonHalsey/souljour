jQuery( document ).ready(function() {
//     jQuery('.hero__text-wrap').html("<p>You who are seeking,<br> Whatever path you are on,<br>The journey starts now.</p><span class=“gold_txt”>It begins with a breath…</span><p>Close your eyes,<br>Unmind your mind.<br>Let your truth rise!</p><p>Feel it. Shake it. Rock it.<br>Move through this world<br>in freedom…</p><span class=“cred_txt”>Lorin Roche, Ph.D<br>The Radiance Sutras</span>");

	moveJi();


});


function moveJi() {
	var jiman = $('.ji-content img').detach();
	$('.ji-image').append(jiman);
}