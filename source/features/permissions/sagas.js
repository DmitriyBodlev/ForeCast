import { takeLatest, put } from 'redux-saga/effects';
import * as Actions from './actions';

// TODO, with real API

const permissions = [
  {
    'guid': '2E82F2F9-0CB2-4B30-A827-0E2E7BFF76AF',
    'roleGuid': '0b3525ee-2471-48b3-86ec-b95aafbde3bf',
    'itemGroup': 'menu',
    'itemGroupOwner': null,
    'item': 'analysis',
    'permission_on_item': 'WRITE',
    'description': null,
  },
  {
    'guid': 'C0B0791A-ADAC-47BF-A85B-4501A6BA69A6',
    'roleGuid': '0b3525ee-2471-48b3-86ec-b95aafbde3bf',
    'itemGroup': 'menu',
    'itemGroupOwner': null,
    'item': 'invoice',
    'permission_on_item': 'WRITE',
    'description': null,
  },
  {
    'guid': 'F64164F4-10BA-4FB9-95A0-A2767A415E6E',
    'roleGuid': '0b3525ee-2471-48b3-86ec-b95aafbde3bf',
    'itemGroup': 'menu',
    'itemGroupOwner': null,
    'item': 'dispatch',
    'permission_on_item': 'WRITE',
    'description': null,
  },
  {
    'guid': 'A738C2EE-91B2-40A1-9F22-F1846E0A3FF7',
    'roleGuid': '0b3525ee-2471-48b3-86ec-b95aafbde3bf',
    'itemGroup': 'menu',
    'itemGroupOwner': null,
    'item': 'items',
    'permission_on_item': 'WRITE',
    'description': null,
  },
  {
    'guid': 'B91288C0-D27E-41FC-B7ED-A18AE45C689F',
    'roleGuid': '0b3525ee-2471-48b3-86ec-b95aafbde3bf',
    'itemGroup': 'menu',
    'itemGroupOwner': null,
    'item': 'location',
    'permission_on_item': 'WRITE',
    'description': null,
  },
  {
    'guid': '41B8C6B4-B7A1-4112-A619-4D5FEAACD6F3',
    'roleGuid': '0b3525ee-2471-48b3-86ec-b95aafbde3bf',
    'itemGroup': 'menu',
    'itemGroupOwner': null,
    'item': 'carriers',
    'permission_on_item': 'WRITE',
    'description': null,
  },
  {
    'guid': '9FE77BF9-8858-4343-9B99-A63834C4F735',
    'roleGuid': '0b3525ee-2471-48b3-86ec-b95aafbde3bf',
    'itemGroup': 'menu',
    'itemGroupOwner': null,
    'item': 'systemConfigurations',
    'permission_on_item': 'WRITE',
    'description': null,
  },
  {
    'guid': 'A7609FFD-17E8-4775-AE86-E76092C69CC0',
    'roleGuid': '0b3525ee-2471-48b3-86ec-b95aafbde3bf',
    'itemGroup': 'menu',
    'itemGroupOwner': null,
    'item': 'admin',
    'permission_on_item': 'WRITE',
    'description': null,
  },
  {
    'guid': 'D63681FF-83BE-4BD1-9D35-5B03A3E40A51',
    'roleGuid': '0b3525ee-2471-48b3-86ec-b95aafbde3bf',
    'itemGroup': 'user_settings',
    'itemGroupOwner': null,
    'item': 'AdminSetting',
    'permission_on_item': 'WRITE',
    'description': 'Admin section inside user profile',
  },
  {
    'guid': 'D63681FF-83BE-4BD1-9D35-5B03A3E40A57',
    'roleGuid': '0b3525ee-2471-48b3-86ec-b95aafbde3bi',
    'itemGroup': 'menus',
    'itemGroupOwner': null,
    'item': 'NavComponent',
    'permission_on_item': 'WRITE',
    'description': 'The main vabigation menu',
  },
  {
    'guid': 'D63681FF-83BE-4BD1-9D35-5B03A3E40A99',
    'roleGuid': '0b3525ee-2471-48b3-86ec-b95aafbde3bi',
    'itemGroup': 'menus',
    'itemGroupOwner': null,
    'item': 'SidebarComponent',
    'permission_on_item': 'WRITE',
    'description': 'The main sidebar',
  },
];

export function* getPermissionsSaga() {
  try {
    yield put(Actions.receivedPermissionsSuccess(permissions));
  } catch (error) {
    yield put(Actions.receivedPermissionsFail(error));
  }
}

function* permissionsWatcherSaga() {
  yield takeLatest(Actions.getPermissionsRequest, getPermissionsSaga);
}

export default permissionsWatcherSaga;
