import { model, models, Schema, Document } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  imageUrl: string;
  price?: string;
  url?: string;
  createdAt: Date;
  startDateTime: Date;
  endDateTime: Date;
  isFree: boolean;
  category: { _id: string; name: string };
  organizer: { _id: string; firstName: string; lastName: string };
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  imageUrl: { type: String, required: true },
  price: { type: String },
  url: { type: String },
  createdAt: { type: Date, default: Date.now },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  isFree: { type: Boolean, default: false },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
