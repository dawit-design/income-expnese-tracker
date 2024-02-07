const mongoose = require("mongoose");

//account shcema

const accountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
      enum: [
        "Savings",
        "Investment",
        "Checking",
        "Credit Card",
        "Builing",
        "School",
        "Project",
        "Utilities",
        "Travel",
        "Personal",
        "Groceries",
        "Entertainment",
        "Loan",
        "Cash Flow",
        "Uncategorized",
      ],
      required: true,
    },
    intialBalance: {
      type: Number,
      default: 0,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    notes: {
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

//model
const Account = mongoose.model("User", accountSchema);
module.exports = Account;
