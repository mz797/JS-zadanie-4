// class Produkt {
// 	cenaEnergii = 200;
// 	constructor(id, nazwa, model, rok, cena, zużycieEnergii) {
// 		this.id = id;
// 		this.nazwa = nazwa;
// 		this.model = model;
// 		this.rok = rok;
// 		this.cena = cena;
// 		this.zużycieEnergii = zużycieEnergii;
// 	}
// 	koszt() {
// 		return this.cena;
// 	}
// 	kosztEnergii() {
// 		return this.zużycieEnergii * this.cenaEnergii
// 	}
// 	wiekProduktu() {
// 		return new Date().getFullYear() - this.rok;
// 	}
// 	wiekProduktuLata() {
// 		if (this.wiekProduktu() == 1) return "1 rok";
// 		else if (
// 			(this.wiekProduktu() > 10 && this.wiekProduktu() <= 21) ||
// 			(this.wiekProduktu().toString()[
// 				this.wiekProduktu().toString().length - 1
// 			] >= 5 &&
// 				this.wiekProduktu().toString()[
// 					this.wiekProduktu().toString().length - 1
// 				] <= 9) ||
// 			this.wiekProduktu().toString()[
// 				this.wiekProduktu().toString().length - 1
// 			] == 0 ||
// 			this.wiekProduktu().toString()[
// 				this.wiekProduktu().toString().length - 1
// 			] == 1
// 		)
// 			return `${this.wiekProduktu()} lat.`;
// 		else if (
// 			this.wiekProduktu().toString()[
// 				this.wiekProduktu().toString().length - 1
// 			] >= 2 &&
// 			this.wiekProduktu().toString()[
// 				this.wiekProduktu().toString().length - 1
// 			] <= 4
// 		)
// 			return `${this.wiekProduktu()} lata`;
// 		else return "dupa";
// 	}
// }