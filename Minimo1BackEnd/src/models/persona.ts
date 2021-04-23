import { model, Schema, Document } from 'mongoose';


export interface IPersona extends Document{
  nombre: string;
  apellidos: string;
  fechanacimiento: string;
  fechavacunado: string;
  profesion: string;
  vacuna: string;
}

const personaSchema = new Schema({
  nombre: {
      type: String
  },
  apellidos: {
      type: String
  },
  fechanacimiento: {
      type: String
  },
  fechavacunado: {
      type: String
  },
  profesion: {
      type: String
  },
  vacuna: {
    type: String
  }
});


export default model<IPersona>('Persona', personaSchema);