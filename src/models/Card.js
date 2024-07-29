const { mongoose } = require('mongoose');

const typeSchema = {
  name: {
    type: String,
      enum: [
          'מטבח',
          'ארון קיר',
          'ארון רחצה',
          'חיפוי קיר',
          'מזנון',
      ],
    required: true,
    trim: true,
  },
  typeID: { type: String, required: true },
  sID: { type: Number },
};

const clientSchema = {
  name: { type: String },
  phone1: { type: String },
  phone2: { type: String },
};

const addressSchema = {
  city: { type: String },
  street: { type: String },
  apartment: { type: String },
  floor: { type: String },
};

const cardSchema = new mongoose.Schema(
  {
    orderID: { type: mongoose.Types.ObjectId, required: true },
    orderDate: { type: Date, required: true },
    cardNumber: { type: String, required: true, unique: true, trim: true },
    dueDate: { type: Date, default: Date.now },
    type: { type: typeSchema, required: true },
    client: { type: clientSchema, required: true },
    address: { type: addressSchema, required: true },
    status: {
      type: String,
      enum: [
        'ממתין למפעל',
        'בעבודה במפעל',
        'מוכן להתקנה',
        'בהתקנה',
        'תוכניות מוכנות',
      ],
      required: true,
      trim: true,
      default: 'ממתין למפעל',
    },
    archived: { type: Boolean, required: true, default: false },
  },
  { timestamps: true, versionKey: false }
);

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;