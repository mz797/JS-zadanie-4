// class ListaTowarow {
// 	constructor() {
// 		this.Produkty = [];
// 	}

// 	wypiszProdukt(idProduktu) {
// 		for (let produkt of this.Produkty) {
// 			if (produkt.id == idProduktu)
// 				return `ID:${produkt.id}, nazwa: ${produkt.nazwa}, model: ${produkt.model}, rok: ${produkt.rok}, cena: ${produkt.cena}zł, zużycie energii: ${produkt.zużycieEnergii}kWh`;
// 		}
// 	}
// 	wypiszWszystkieProdukty() {
// 		let str = "";
// 		for (let produkt of this.Produkty) {
// 			str += this.wypiszProdukt(produkt.id) + "\n";
// 			// str += `ID:${produkt.id}, nazwa: ${produkt.nazwa}, model: ${produkt.model}, rok: ${produkt.rok}, cena: ${produkt.cena}zł, zużycie energii: ${produkt.zużycieEnergii}kWh\n`;
// 		}
// 		return str;
// 	}
// 	dodajProdukt(produkt) {
// 		if (this.Produkty.filter((p) => p.id === produkt.id).length === 0) {
// 			this.Produkty.push(produkt);
// 		} else throw `Produkt o tym ID już istnieje!`;
// 		// else console.log("dodaj produkt dupa");
// 	}
// 	zmienProdukt(idProduktu, produkt) {
// 		let staryProduktIdx = this.Produkty.findIndex(
// 			(p) => p.id === idProduktu
// 		);
// 		for (let key in this.Produkty[staryProduktIdx]) {
// 			this.Produkty[staryProduktIdx][key] = produkt[key];
// 		}
// 		this.Produkty[staryProduktIdx].id = idProduktu;
// 		console.log(this.Produkty[staryProduktIdx]);
// 	}
// }
