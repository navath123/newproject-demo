
document.querySelectorAll('.doctor').forEach(doctor => {
    doctor.addEventListener('click', () => {
        alert('You clicked on ' + doctor.id);
    });
});
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Doctor = mongoose.model('Doctor', new mongoose.Schema({
  name: String,
  qualification: String,
  specialization: String,
  experience: Number,
  contact: {
    cell: Number,
    email: String
  }
}));

const doctor1 = new Doctor({
  name: 'Doctor 1',
  qualification: 'MBBS, MD',
  specialization: 'Cardiology',
  experience: 10,
  contact: {
    cell: 1234567890,
    email: 'doctor1@example.com'
  }
});

doctor1.save((err, doctor1) => {
  if (err) return console.error(err);
  console.log('Doctor saved to database');
});