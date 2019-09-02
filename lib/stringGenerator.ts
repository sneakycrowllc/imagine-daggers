import { uniqueNamesGenerator, UniqueNamesGeneratorConfig } from 'unique-names-generator';
import niceware from 'niceware';

const usernameConfig: UniqueNamesGeneratorConfig = {
  separator: '',
  length: 2.
};

export const generateName = () => uniqueNamesGenerator(usernameConfig);

export const generatePassword = () => niceware.generatePassphrase(8).join('_');
