const initialState = {
        praxiszeiten:{
                montag: "9 - 13 Uhr",
                dienstag: "9 - 16 Uhr",
                mittwoch: "12 - 19 Uhr",
                donnerstag: "9 - 15 Uhr",
                freitag: "geschlossen"
         },
        // noteText: `Unsere Praxis bleibt wegen Urlaub vom 06.04. bis 09.04.2021 geschlossen.\n In Notfällen wenden Sie sich an die Praxis\n Dr. Beispiel\n Beispielstrasse 4711\n 12439 Berlin\n Tel.: 030 / 11 11 11 11\n oder an den kassenzahnärztlichen Notdienst\n Tel.: 030 / 22 22 22 22.`,
        noteText: `\nHINWEIS ZUR CORONA-SITUATION:\nBei grippe-ähnlichen Symtomen wie \n Halsschmerzen, Husten, Fieber,\nGeschmacks- oder Geruchsverlust\nkommen Sie bitte nicht in die Praxis.\nBitte kontaktieren Sie zuerst TELEFONISCH Ihren Hausarzt\nund lassen dieses Symptome dort abklären.\n\nVielen Dank.\n`,
        showNote: true,
        error: 0 
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_ALLINFO':

        return {...state,
                info: action.value.allinfo.info,
                praxiszeiten: action.value.allinfo.zeiten,
                error: action.value.error,
                message: action.value.message

        }

        default: 
            return state;
    }

}

export default reducer;