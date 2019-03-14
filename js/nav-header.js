function Focusnormal(){
	let search =document.getElementById('icon-search');
	search.innerHTML='&#xf00e';
}
function Focus(){
	let search =document.getElementById('icon-search');
	setTimeout(function(){
		search.innerHTML='&#xf002';
	},1000);

}
Focusnormal()