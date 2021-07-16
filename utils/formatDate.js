export function formatDate(date) {
    switch (date.getDay()) {
        case 1:
            return 'วันจันทร์'
        case 2:
            return 'วันอังคาร'
        case 3:
            return 'วันพุธ'
        case 4:
            return 'วันพฤหัสบดี'
        case 5:
            return 'วันศุกร์'
        case 6:
            return 'วันเสาร์'
        case 7:
            return 'วันอาทิตย์'

    }
}