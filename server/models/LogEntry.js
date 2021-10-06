const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const logEntrySchema = new Schema({
  entryDate: {
    type: Date,
    required: true
  },
  logEntry: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

const LogEntry = model('LogEntry', logEntrySchema);

module.exports = LogEntry;
