import path from 'path'
import {validateSchemaFromDir} from '../config/schema-validators/validators'

validateSchemaFromDir(path.join(__dirname, '../tokens/functional'))
