export function enumToStringCategory(categories) {
    return categories.map(category => {
        switch (category) {
            case 0:
                return 'ทั่วไป'
            case 1:
                return 'แป้ก'
            case 2:
                return 'เสี่ยวเกี้ยวสาว'
            case 3:
                return 'เหี้ยอะไรก็ไม่รู้'
            default:
                return 'อื่น ๆ'
        }
    })
}

export function stringToEnumCategory(categories) {
    return categories.map(category => {
        switch (category) {
            case 'ทั่วไป':
                return 0
            case 'แป้ก':
                return 1
            case 'เสี่ยวเกี้ยวสาว':
                return 2
            case 'เหี้ยอะไรก็ไม่รู้':
                return 3
            default:
                return 999
        }
    })
}