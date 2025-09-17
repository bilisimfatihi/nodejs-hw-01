import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const readContacts = async () => {
  try {
    const text = await fs.readFile(PATH_DB, 'utf-8');
    if (!text.trim()) return [];
    const data = JSON.parse(text);
    return data;
  } catch (err) {
    console.error('Dosya okuma hatası:', err);
  }
};
