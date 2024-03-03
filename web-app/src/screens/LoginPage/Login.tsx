// This file is part of MinIO Console Server
// Copyright (c) 2021 MinIO, Inc.
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

import React, {Fragment, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Button, Loader, LoginWrapper, RefreshIcon} from "mds";
import MainError from "../Console/Common/MainError/MainError";
import {AppState, useAppDispatch} from "../../store";
import {useSelector} from "react-redux";
import {getFetchConfigurationAsync} from "./loginThunks";
import {resetForm} from "./loginSlice";
import {getLogoVar} from "../../config";
import {setHelpName} from "../../systemSlice";
import StrategyForm from "./StrategyForm";

export const getTargetPath = () => {
    let targetPath = "/browser";
    return targetPath;
};

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const loadingFetchConfiguration = useSelector(
        (state: AppState) => state.login.loadingFetchConfiguration,
    );
    const navigateTo = useSelector((state: AppState) => state.login.navigateTo);


    const backgroundAnimation = useSelector(
        (state: AppState) => state.login.backgroundAnimation,
    );

    useEffect(() => {
        if (navigateTo !== "") {
            dispatch(resetForm());
            navigate(navigateTo);
        }
    }, [navigateTo, dispatch, navigate]);

    useEffect(() => {
        if (loadingFetchConfiguration) {
            dispatch(getFetchConfigurationAsync());
        }
    }, [loadingFetchConfiguration, dispatch]);

    let loginComponent = <StrategyForm redirectRules={[]}/>

    useEffect(() => {
        dispatch(setHelpName("login"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <MainError/>
            <LoginWrapper
                logoProps={{applicationName: "console", subVariant: "new"}}
                form={loginComponent}
                //       formFooter={
                //           <Box
                //               sx={{
                //                   "& .separator": {
                //                       marginLeft: 4,
                //                       marginRight: 4,
                //                   },
                //               }}
                //           >
                //               <a href={docsURL} target="_blank" rel="noopener">
                //                   Documentation
                //               </a>
                //               <span className={"separator"}>|</span>
                //               <a
                //                   href="https://github.com/minio/minio"
                //                   target="_blank"
                //                   rel="noopener"
                //               >
                //                   GitHub
                //               </a>
                //               <span className={"separator"}>|</span>
                //               <a
                //                   href="https://subnet.min.io/?ref=con"
                //                   target="_blank"
                //                   rel="noopener"
                //               >
                //                   Support
                //               </a>
                //               <span className={"separator"}>|</span>
                //               <a
                //                   href="https://min.io/download/?ref=con"
                //                   target="_blank"
                //                   rel="noopener"
                //               >
                //                   Download
                //               </a>
                //           </Box>
                //       }
                //       promoHeader={
                //           <span style={{fontSize: 28}}>High-Performance Object Store</span>
                //       }
                promoInfo={
                    <span style={{fontSize: 14, lineHeight: 1}}>
              MinIO is a cloud-native object store built to run on any
              infrastructure - public, private or edge clouds. Primary use cases
              include data lakes, databases, AI/ML, SaaS applications and fast
              backup & recovery. MinIO is dual licensed under GNU AGPL v3 and
              commercial license. To learn more, visit{" "}
                        <a href={"https://min.io/?ref=con"} target="_blank" rel="noopener">
                www.min.io
              </a>
              .
            </span>
                }
                //       backgroundAnimation={backgroundAnimation}
            />
        </Fragment>
    );
};

export default Login;
