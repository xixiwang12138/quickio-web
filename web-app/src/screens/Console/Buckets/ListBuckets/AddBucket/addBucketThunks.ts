// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import {getBytes} from "../../../../../common/utils";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppState} from "../../../../../store";
import {api} from "../../../../../api";
import {
    MakeBucketRequest,
    ObjectRetentionMode,
    ObjectRetentionUnit,
} from "../../../../../api/consoleApi";
import {permission2Type} from "./AddBucket";

export const addBucketAsync = createAsyncThunk(
    "buckets/addBucketAsync",
    async (_, {getState, rejectWithValue, dispatch}) => {
        const state = getState() as AppState;

        const bucketName = state.addBucket.name;
        const quotaEnabled = state.addBucket.quotaEnabled;
        const quotaSize = state.addBucket.quotaSize;
        const quotaUnit = state.addBucket.quotaUnit;

        const aclType = state.addBucket.aclType

        let request: MakeBucketRequest = {
            name: bucketName,
            permission: aclType,
        };

        if (quotaEnabled) {
            const amount = getBytes(quotaSize, quotaUnit, true);
            request.quota = {
                enabled: true,
                quota_type: "hard",
                amount: parseInt(amount),
            };
        }

        return api.buckets.makeBucket(request);
    },
);
