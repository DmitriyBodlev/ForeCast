import { schema } from 'normalizr';

export const permissionSchema = new schema.Entity('permissions', {}, {idAttribute: 'item'});
export const userPermissionsSchema = [permissionSchema];
