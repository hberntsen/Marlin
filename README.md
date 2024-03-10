# Printer in bedrijf stellen

## 1. Basis
zoals in de gebruiksaanwijzing
## 2. Motoren testen
zoals in de gebruiksaanwijzing
## 3. Verwarming van nozzle en bed
zoals in de gebruiksaanwijzing
## 4. Stel de extruder in
zoals in de gebruiksaanwijzing
## 5. Eindschakelaars
1. Test of eindstop schakelaars goed aangesloten zijn via het menu `Beweging` -> `Eindstop status`.
2. Monteer de schakelaar zoals in de gebruiksaanwijzing staat
## 6. Auto home (nu thuispositie)
## 7. Afstellen
1. Denk aan het schoonmaken van de printkop
2. Voer in het menu [`Configuratie`](#configuratie) de [`Zet X0 Y0 Z0`](#zet-x0-y0-z0) stap uit.
3. Meet via menu [`Configuratie`](#configuratie) de [Z-probe compensatie](#z-probe-compensatie-meten).
4. Voer de [bednivellering](#bednivellering) uit.
## 8. Voorbereiding Cura
Niet meer nodig 
## 9. Cura installeren
Zoals in het boekje, behalve:

* De Start G-code hoeft in principe niet aangepast te worden. Waar we voorheen dus twee regels toe moesten voegen hoeft dat niet meer. Ik kan wel aanraden om daaronder de extrude waarde te verhogen van 3 naar 20. Dus: `G1 F200 E20 ;extrude 20mm of feed stock`. Dan zijn de skirt lijnen ook niet meer zo nodig omdat er bij de start al wat meer filament uit komt.
* De versie G-code staat in de handleiding op RepRap. Alhoewel dat werkt is er ook Marlin te kiezen en dat is de software die op de printer staat. Beide werken bij mij maar Marlin lijkt mij dan beter.

## 10. Klaar
zoals in de gebruiksaanwijzing

## Je eigen naam op de printer

Plaats een bestandje genaamd `auto0.g` met de volgende inhoud:

```gcode
M117 Harms printer
```

Alles achter M117 zal met het opstarten van de printer op het scherm verschijnen.

## Voor elke print

Pagina 17

Iedere keer wanneer de printer uit is geweest moet je de printer opnieuw afstellen. (ik denk niet dat dit tussen de prints nodig is aangezien de Z motoren dan niet uit zijn geweest?)

1. Nozzle schoonmaken
2. Glasplaat schoonmaken
3. Draai bednivellering
4. Instellingen opslaan

# Schermen

## Statusscherm

Wanneer de printer start zie je het infoscherm. 

![](./status-koud.png)

Hier lees je af:
* temperatuur van de nozzle
* temperatuur van het heated bed
* positie X-Y-Z van de nozzle.
* printsnelheid in procenten
* balkje van hoe ver de printer is met printen
* statusbericht

> [!NOTE]
> Zie je vraagtekens bij de X-Y-Z positie? Dan heeft de printer geen idee waar de printkop en het bed staan. Gebruik `Beweging` -> `Naar thuispositie` om accuraat de posities te zien

> [!NOTE]
> Knippert X, Y of Z? Dan zijn de motoren uit geweest sinds de laatste keer dat je naar de thuispositie bent geweest. Als de motor van een as uit staat kan je die as vrij bewegen. De X en Y motoren worden automatisch uitgeschakeld om energie te sparen.

> [!NOTE]
> Het draaien aan de knop zal de printsnelheid veranderen

Wanneer het bed of de nozzle verwarmd worden verandert die status:

![](./status-verwarmen.png)

Aan de bovenkant van de icoontjes staat de gewenste temperatuur, onder het icoontje de huidige temperatuur. De nozzle loopt vol tijdens het verwarmen. Als de nozzle warm is dan zal deze gevuld zijn wanneer het verwarmingselement aan staat en leeg zijn wanneer die uit is. Bij het bed is dat te zien aan het verdwijnen/verschijnen van het balkje rechts van het bed icoontje.

### Tijdens het printen
Tijdens het printen verandert de X-Y-Z status in E-Z. E is de hoeveelheid filament die verbruikt is. Verder rouleert de printer ook tussen het percentage van de huidige print, de E (hoe lang de printer bezig is geweest met deze print), R (hoe lang het nog duurt). De geschatte tijd is in het begin nog te lang, als de printer even bezig is wordt deze betrouwbaarder.

# Het menu

Na het indrukken van de knop verschijnt het hoofdmenu. 

![](./hoofdmenu-samen.png)

Hierin zijn de verschillende menu's beschikbaar.
* `Beweging`: printkop verplaatsen en 
* `Temperatuur`: temperatuur instellen van de printkop en het bed
* `Configuratie`: instellingen van de printer
* `SD kaart uitwerpen`: veilig verwijderen van de SD kaart
* `Print van SD kaart`: print starten

## Beweging

![](./menu-beweging.png)

* `As verplaatsen`: verplaats de printkop en bed
* `Naar thuispositie`: de printkop beweegt in alle richtingen tweemaal naar de eindschakelaars
* `Motoren uit`: zet alle motoren uit zodat ze met de hand gedraaid kunnen worden
* `Eindstop status`: stelt je in staat om alle eindstopschakelaars te testen. De schakelaar moet op `Nee` staan wanneer deze niet ingedrukt is.

### As verplaatsen

![](./menu-beweging-as-verplaatsen-volledig.png)
Hier kunnen alle motoren bediend worden. De `Soft eindstops` optie begrenst de maximale bewegingsvrijheid softwarematig. Het is daarom aanbevolen de printer eerst in de thuispositie te brengen voor de beste werking.

> [!NOTE]  
> De `Verplaats filament` optie zal een waarschuwing geven wanneer de nozzle koud is. Verwarm de nozzle eerst via het `Temperatuur` menu in het hoofdmenu.

> [!NOTE]  
> De `Soft eindstops` optie werkt niet voor de minimale Z-as positie omdat we de eindstop al een stukje boven het bed geraakt wordt.

## Temperatuur

![](./menu-temperatuur-met-afkoelen.png)

In dit menu kan tijdelijk de temperatuur van de nozzle of het bed ingesteld worden. Het `PLA verwarmen` menu kan gebruikt worden als snelkoppeling voor de juiste temperaturen voor PLA filament. 

> [!NOTE]  
> Wanneer je de verwarming geactiveerd hebt verschijnt de optie `Afkoelen` in het menu. Daarmee schakel je de verwarming weer uit. Je kunt ook gewoon de hele printer even uitschakelen!

> [!CAUTION]
> Schakel de printer niet uit wanneer de extruder nog warm is. De ventilator van de coldend valt dan uit en dat kan verstoppingen veroorzaken.

## Configuratie

![](./menu-configuratie-volledig.png)

### Zet X0 Y0 Z0

De printer moet weten waar het bed begint. Er is vanaf die beginpositie een ruimte van 18 x 14 cm beschikbaar om op te printen. Mocht dit te weinig zijn, dan kun je zelf de waarden aanpassen in Cura.

Deze optie kan als volgt gebruikt worden:

1. Zet de printer in de thuispositie, via de `Naar thuispositie` optie in het hoofdmenu.
2. Verplaats via het menu `Beweging` -> `As verplaatsen` de X-as naar de linkerrand van de glasplaat, tot 2 cm vanaf de rand.
3. Verplaats de Y-as naar de voorkant van de glasplaat, tot 4 cm vanaf de rand.
4. Indien je geen Z-probe gaat gebruiken, ga nu hieronder door met de fijnafstelling van de Z-as
5. Activeer nu de optie `Zet X0 Y0 Z0` in het `Configuratie` menu.
6. Sla nu de instellingen op, via `Configuratie` -> `Instellingen opsl.`.

#### Fijnafstelling Z-as

1. Verplaats de Z-as nauwkeurig richting het printbed. Eerst met stappen van 1mm, het laatste stukje met 0.1mm. Meet met een papiertje tot je enige weerstand voelt tussen de nozzle en de glasplaat.
2. Activeer nu de optie `Zet X0 Y0 Z0` in het `Configuratie` menu.
3. Sla nu de instellingen op, via `Configuratie` -> `Instellingen opsl.`.
4. Verplaats X-as naar de rechterkant van het bed
5. Probeer nu dezelfde weerstand rechts te krijgen door met de hand aan de rechter spindel te draaien

> [!NOTE]
> Na het uitvoeren van Bednivellering wordt Z0 opnieuw bepaald aan de hand van de probe. Klopt de Z0 toch niet helemaal? Verander dan de `Z-probe comp.` in het `Bednivellering` menu en voer de bednivellering opnieuw uit.

### Z-probe compensatie meten

De printer moet weten na hoeveeel millimeter beweging de Z-probe eindstop klikt. Deze optie helpt je de afstand van de nozzle tot het schakelmoment te meten.

Bij het selecteren van deze optie wordt de volgende procedure gevolgd:

1. De printkop gaat automatisch naar de thuispositie.
2. De printkop beweegt naar het midden
3. De printer keert terug naar het statusscherm met de melding `Bevestig Z-probe`
4. Bevestig de Z-probe aan de printkop
5. Druk op de draaiknop
6. De printer wacht nu tot het bed verwarmd is
7. De meting wordt gedaan
8. De printer vraagt nu om de Z-probe te verwijderen, verwijder die
9. Druk op de knop
10. Verplaats nu via het menu de nozzle richting het printbed, meet met een papiertje dat je een héél klein beetje weerstand voelt.
11. Wanneer de nozzle het papietje net raakt, kies de optie `Klaar` in het menu
12. De printer weet nu hoeveel die moet compenseren met de Z-probe. Sla via het `Configuratie` menu de instellingen op.

> [!NOTE]
> Zit de printkop te laag tijdens het printen? Dan zat je in deze stap te laag toen je `Klaar` koos in het menu. Je kan ook in het `Bednivellering` menu de `Z-probe comp.` waarde iets verhogen (en vice versa). Start een nieuwe bednivellering na het aanpassen.

### Bednivellering

![](./menu-configuratie-bednivellering.png)

> [!IMPORTANT]  
> Voor deze optie is het belangrijk dat de Z-probe compensatie gemeten is. De meetwaarde staat in de `Z-probe comp.` in dit menu.

> [!CAUTION]
> Om te voorkomen dat de Z-probe smelt, zorg ervoor dat de printkop kouder dan 50 graden is voordat je de probe bevestigt.

1. Kies `Start bednivellering`
2. De printer zal nu zonder bevesgiging in beeld naar de thuispositie gaan
3. De printer vraagt om de Z-probe te bevestigen
4. Druk na het bevestigen op de draaiknop
5. Het bed wordt nu verwarmd
6. De printer zal nu 9 punten meten
7. De printer vraagt om de probe te verwijderen, doe dat
8. Sla de instellingen op

> [!NOTE]  
> De bednivellering kan uitgeschakeld worden indien gewenst. Deze optie verschijnt nadat bednivellering al eens gedaan is en de printer naar de thuispositie gebracht is.

### PLA verw. conf.

![](./menu-configuratie-pla-verw-conf.png)

De snelkoppelingen in het menu `Temperatuur` kunnen hier geconfigureerd worden.

### Instellingen opsl., laden, reset

Onderaan het menu staan opties om de instellingen op te slaan. Normaal gesproken verliest de printer alle gedane instellingen wanneer deze uitgezet wordt. Pas bij de `Instellingen opsl` optie worden de instellingen bewaard. Ook de `Instellingen reset` optie zal dus de instellingen resetten maar de bewaarde instellingen nog niet veranderen, daarvoor moeten de geresette instellingen ook nog een keer opgeslagen worden. De `Instellingen laden` zal de laatst opgeslagen instellingen weer inladen. Dat is hetzelfde als de printer uit/aan zetten.

> [!NOTE]  
> Er moet een duidelijke piep bij het opslaan, anders is er niets opgeslagen.

## Afstellen tijdens het printen

![](./hoofdmenu-tijdens-printen.png)

Tijdens het printen heeft het hoofdmenu een extra opties om de print te pauzeren, stoppen en verder af te stellen. In het menu Afstellen staan de volgende opties:

![](./hoofdmenu-tijdens-printen-afstellen-volledig.png)

* Snelheid: dit zijn procenten van de basis-instelling. Wanneer je in Cura een printsnelheid 30mm/sec hebt ingesteld, is dat nu 100%. Wil je de snelheid verlagen (vooral bij kleine voorwerpen) dan draai je dit terug naar 80% of 60% of nog minder.
* Nozzle: Je kunt de temperatuur hier aanpassen, maar dat lukt pas nadat de nozzle gestart is met opwarmen.
* Bed: meestal geen andere instelling nodig.
* Flow: de hoeveelheid filament die aangevoerd wordt. Ook dit zijn procenten van de basisinstelling.
* Babystap Z: Wanneer je bij de eerste printlaag denkt dat de printkop toch iets hoger of lager moet staan, kun je dat hier bijstellen. Het is een heel nauwkeurige regeling. Je moet veel draaien om effect te zien.


> [!NOTE]  
> De instellingen die je hier aanpast gelden eenmalig
