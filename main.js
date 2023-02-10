class Produkt {
	cenaEnergii = 200;
	#id;
	#nazwa;
	#model;
	#rok;
	#cena;
	#zużycieEnergii;
	constructor(id, nazwa, model, rok, cena, zużycieEnergii) {
		this.#id = id;
		this.#nazwa = nazwa;
		this.#model = model;
		this.#rok = rok;
		this.#cena = cena;
		this.#zużycieEnergii = zużycieEnergii;
		// console.log(Object.entries({id, nazwa, model, rok, cena, zużycieEnergii}));
	}
	get Id() {
		return this.#id;
	}
	set Id(id) {
		this.#id = id;
	}
	get Nazwa() {
		return this.#nazwa;
	}
	get Model() {
		return this.#model;
	}
	get Rok() {
		return this.#rok;
	}
	get Cena() {
		return this.#cena;
	}
	get ZuzycieEnergii() {
		return this.#zużycieEnergii;
	}
	koszt() {
		return this.#cena;
	}
	kosztEnergii() {
		return this.#zużycieEnergii * this.cenaEnergii;
	}
	wiekProduktu() {
		return new Date().getFullYear() - this.#rok;
	}
	wiekProduktuLata() {
		const intl = new Intl.RelativeTimeFormat("pl");
		// console.log(intl.format(new Date().getFullYear() - this.#rok, "year"));
		return intl
			.format(new Date().getFullYear() - this.#rok, "year")
			.slice(3);
	}
}

class ListaTowarow {
	constructor() {
		this.Produkty = [];
	}

	wypiszProdukt(idProduktu) {
		for (let produkt of this.Produkty) {
			if (produkt.Id == idProduktu)
				return `ID:${produkt.Id}, nazwa: ${produkt.Nazwa}, model: ${produkt.Model}, rok: ${produkt.Rok}, cena: ${produkt.Cena}zł, zużycie energii: ${produkt.ZuzycieEnergii}kWh`;
		}
	}
	wypiszWszystkieProdukty() {
		let str = "";
		for (let produkt of this.Produkty) {
			str += `ID:${produkt.Id}, nazwa: ${produkt.Nazwa}, model: ${produkt.Model}, rok: ${produkt.Rok}, cena: ${produkt.Cena}zł, zużycie energii: ${produkt.ZuzycieEnergii}kWh\n`;
		}
		return str;
	}
	dodajProdukt(produkt) {
		if (this.Produkty.filter((p) => p.Id === produkt.Id).length === 0) {
			this.Produkty.push(produkt);
		} else throw `Produkt o tym ID już istnieje!`;
	}
	zmienProdukt(idProduktu, produkt) {
		let staryProduktIdx = this.Produkty.findIndex(
			(p) => p.Id === idProduktu
		);
		for (let key in this.Produkty[staryProduktIdx]) {
			this.Produkty[staryProduktIdx][key] = produkt[key];
		}
		this.Produkty[staryProduktIdx].Id = idProduktu;
		console.log(this.Produkty[staryProduktIdx]);
	}
	znajdzProdukt(id) {
		return this.Produkty.find((a) => a.Id === id);
	}
}


class ProduktMagazynowy {
	constructor(produkt, ilosc) {
		this.produkt = produkt;
		this.ilosc = ilosc;
	}
}
class Magazyn extends ListaTowarow {
	constructor() {
		super();
		this.listaProduktowMagazynu = [];
	}
	dodajProdukt(produkt, ilosc) {
		let temp = this.listaProduktowMagazynu.find(
			(prod) => prod.produkt.Id === produkt.Id
		);
		if (temp) {
			temp.ilosc += ilosc;
		} else {
			this.listaProduktowMagazynu.push(
				new ProduktMagazynowy(produkt, ilosc)
			);
			super.dodajProdukt(produkt);
		}
	}
	pokazIlosc(id) {
		const temp = this.listaProduktowMagazynu.find((prod) => {
			prod.produkt.Id === id;
		});
		return temp.ilosc;
	}
	zabierzProdukt(...params) {
		let temp;
		if (params.length === 2) {
			//jeśli podano id i ilość
			temp = this.listaProduktowMagazynu.find(
				(prod) => prod.produkt.Id === params[0]
			);
		} else if (params.length === 3) {
			//jeśli podano nazwe, model i ilość
			temp = this.listaProduktowMagazynu.find(
				(prod) =>
					prod.produkt.Nazwa === params[0] &&
					prod.produkt.Model === params[1]
			);
		}
		if (params[params.length - 1] > temp.ilosc) {
			console.log(
				`Podano błędną ilość zabieranego produktu! Produkt występuje jedynie w ilości ${temp.ilosc} sztuk.`
			);
			return false;
		} else temp.ilosc -= params[params.length - 1];
		return new Produkt(
			temp.produkt.Id,
			temp.produkt.Nazwa,
			temp.produkt.Model,
			temp.produkt.Rok,
			temp.produkt.Cena,
			temp.produkt.ZuzycieEnergii
		);
	}
}

class Sklep extends ListaTowarow {
	constructor() {
		super();
		
	}
	dodajProdukt(...params) {
		if (params.length === 4) {
			super.dodajProdukt(
				new Produkt(
					Math.floor(Math.random() * 10000),
					params[0],
					params[1],
					2010,
					params[2],
					params[3]
				)
			);
		} else if (params.length === 5) {
			super.dodajProdukt(
				new Produkt(
					params[0],
					params[1],
					params[2],
					2010,
					params[3],
					params[4]
				)
			);
		} else if (params.length === 1) {
			super.dodajProdukt(params[0]);
		} else throw new Error("Błędna ilość argumentów funkcji dodajProdukt");
	}
}

class Zamowienie {
	constructor(sklep, magazyn) {
		this.sklep = sklep;
		this.magazyn = magazyn;
		this.listaZamowienie = {};
	}
	dodajZamowienie(id) {
		if (sklep.znajdzProdukt(id) && this.magazyn.zabierzProdukt(id, 1)) {
			if (this.listaZamowienie[id]) {
				this.listaZamowienie[id].ilosc++;
			} else {
				this.listaZamowienie[id] = {
					produkt: sklep.znajdzProdukt(id),
					ilosc: 1,
				};
			}
		} else
			throw new Error(
				"Zamówienie: Wprowadzono błędne id lub nie ma wystarczającej ilości produktu w magazynie"
			);
	}
}
