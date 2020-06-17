const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/StoicQuotes"
);

const jobSeed = [
  {
    quote: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.",
    person: "Marcus Aurelius"       
  },
  {
    quote: "The time will come when diligent research over long periods will bring to light things which now lie hidden. A single lifetime, even though entirely devoted to the sky, would not be enough for the investigation of so vast a subject... And so this knowledge will be unfolded only through long successive ages",
    person: "Seneca"       
  },
  {
    quote: "We suffer more in imagination than in reality",
    person: "Seneca"       
  },
  {
    quote: "Think of the life you have lived until now as over and, as a dead man, see what’s left as a bonus and live it according to Nature. Love the hand that fate deals you and play it as your own, for what could be more fitting?",
    person: "Marcus Aurelius"       
  },
];

db.Job
    .remove({})
    .then(() => db.Job.collection.insertMany(jobSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
  