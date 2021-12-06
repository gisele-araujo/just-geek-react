import api from "../api/api";

export const Payment = {

    async payPurchase(idUser, shippingCost, coupon) {

        try {
            const response = await api.post(`/payment/${idUser}/${shippingCost}/?coupon=${coupon}`)
            return {
                status: response.status,
                data: response.data
            }
        } catch(err) {
            console.log('Erro:', err)
            return {
                status: false
            }
        }
    },
}