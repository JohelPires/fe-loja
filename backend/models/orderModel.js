import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        orderItems: [
            {
                name: {type: String, required: true},
                qtd: {type: Number, required: true},
                image: {type: String, required: true},
                price: {type: Number, required: true},
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Produto'
                },
                image: {type: String, required: true}
            }
        ],
        enderecoEnvio: {
            endereco: { type: String, required: true },
            cidade: { type: String, required: true },
            cep: { type: String, required: true },
            pais: { type: String, required: true },
        },
        paymentMethod: {
            type: String,
            required: true,
        },
        paymentResult: {
            id: {type: String},
            status: {type: String},
            update_time: {type: String},
            email_adress: {type: String},
        },
        taxPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        taxadeEnvio: {
            type: Number,
            required: true,
            default: 0.0,
        },
        totalPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        isPaid: {
            type: Boolean,
            required: true,
        },
        isPaid: {
            type: Boolean,
            required: true,
        },
        pagoEm: {
            type: Date
        },
        foiEnviado: {
            type: Boolean,
            required: true,
            default: false,
        },
        enviadoEm: {
            type: Date
        },

    }, {
        timestamps: true
    }
)

const Order = mongoose.model('Order', orderSchema)

export default Order