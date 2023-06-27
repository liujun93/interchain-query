import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAmino, GrantSDKType } from "./feegrant";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */
export interface QueryAllowanceRequest {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
export interface QueryAllowanceRequestProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceRequest";
    value: Uint8Array;
}
/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */
export interface QueryAllowanceRequestAmino {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
export interface QueryAllowanceRequestAminoMsg {
    type: "cosmos-sdk/QueryAllowanceRequest";
    value: QueryAllowanceRequestAmino;
}
/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */
export interface QueryAllowanceRequestSDKType {
    granter: string;
    grantee: string;
}
/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */
export interface QueryAllowanceResponse {
    /** allowance is a allowance granted for grantee by granter. */
    allowance: Grant;
}
export interface QueryAllowanceResponseProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceResponse";
    value: Uint8Array;
}
/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */
export interface QueryAllowanceResponseAmino {
    /** allowance is a allowance granted for grantee by granter. */
    allowance?: GrantAmino;
}
export interface QueryAllowanceResponseAminoMsg {
    type: "cosmos-sdk/QueryAllowanceResponse";
    value: QueryAllowanceResponseAmino;
}
/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */
export interface QueryAllowanceResponseSDKType {
    allowance: GrantSDKType;
}
/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */
export interface QueryAllowancesRequest {
    grantee: string;
    /** pagination defines an pagination for the request. */
    pagination: PageRequest;
}
export interface QueryAllowancesRequestProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesRequest";
    value: Uint8Array;
}
/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */
export interface QueryAllowancesRequestAmino {
    grantee: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryAllowancesRequestAminoMsg {
    type: "cosmos-sdk/QueryAllowancesRequest";
    value: QueryAllowancesRequestAmino;
}
/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */
export interface QueryAllowancesRequestSDKType {
    grantee: string;
    pagination: PageRequestSDKType;
}
/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */
export interface QueryAllowancesResponse {
    /** allowances are allowance's granted for grantee by granter. */
    allowances: Grant[];
    /** pagination defines an pagination for the response. */
    pagination: PageResponse;
}
export interface QueryAllowancesResponseProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesResponse";
    value: Uint8Array;
}
/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */
export interface QueryAllowancesResponseAmino {
    /** allowances are allowance's granted for grantee by granter. */
    allowances: GrantAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino;
}
export interface QueryAllowancesResponseAminoMsg {
    type: "cosmos-sdk/QueryAllowancesResponse";
    value: QueryAllowancesResponseAmino;
}
/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */
export interface QueryAllowancesResponseSDKType {
    allowances: GrantSDKType[];
    pagination: PageResponseSDKType;
}
export declare const QueryAllowanceRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryAllowanceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllowanceRequest;
    fromJSON(object: any): QueryAllowanceRequest;
    toJSON(message: QueryAllowanceRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllowanceRequest>): QueryAllowanceRequest;
    fromSDK(object: QueryAllowanceRequestSDKType): QueryAllowanceRequest;
    toSDK(message: QueryAllowanceRequest): QueryAllowanceRequestSDKType;
    fromAmino(object: QueryAllowanceRequestAmino): QueryAllowanceRequest;
    toAmino(message: QueryAllowanceRequest): QueryAllowanceRequestAmino;
    fromAminoMsg(object: QueryAllowanceRequestAminoMsg): QueryAllowanceRequest;
    toAminoMsg(message: QueryAllowanceRequest): QueryAllowanceRequestAminoMsg;
    fromProtoMsg(message: QueryAllowanceRequestProtoMsg): QueryAllowanceRequest;
    toProto(message: QueryAllowanceRequest): Uint8Array;
    toProtoMsg(message: QueryAllowanceRequest): QueryAllowanceRequestProtoMsg;
};
export declare const QueryAllowanceResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryAllowanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllowanceResponse;
    fromJSON(object: any): QueryAllowanceResponse;
    toJSON(message: QueryAllowanceResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllowanceResponse>): QueryAllowanceResponse;
    fromSDK(object: QueryAllowanceResponseSDKType): QueryAllowanceResponse;
    toSDK(message: QueryAllowanceResponse): QueryAllowanceResponseSDKType;
    fromAmino(object: QueryAllowanceResponseAmino): QueryAllowanceResponse;
    toAmino(message: QueryAllowanceResponse): QueryAllowanceResponseAmino;
    fromAminoMsg(object: QueryAllowanceResponseAminoMsg): QueryAllowanceResponse;
    toAminoMsg(message: QueryAllowanceResponse): QueryAllowanceResponseAminoMsg;
    fromProtoMsg(message: QueryAllowanceResponseProtoMsg): QueryAllowanceResponse;
    toProto(message: QueryAllowanceResponse): Uint8Array;
    toProtoMsg(message: QueryAllowanceResponse): QueryAllowanceResponseProtoMsg;
};
export declare const QueryAllowancesRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryAllowancesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllowancesRequest;
    fromJSON(object: any): QueryAllowancesRequest;
    toJSON(message: QueryAllowancesRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllowancesRequest>): QueryAllowancesRequest;
    fromSDK(object: QueryAllowancesRequestSDKType): QueryAllowancesRequest;
    toSDK(message: QueryAllowancesRequest): QueryAllowancesRequestSDKType;
    fromAmino(object: QueryAllowancesRequestAmino): QueryAllowancesRequest;
    toAmino(message: QueryAllowancesRequest): QueryAllowancesRequestAmino;
    fromAminoMsg(object: QueryAllowancesRequestAminoMsg): QueryAllowancesRequest;
    toAminoMsg(message: QueryAllowancesRequest): QueryAllowancesRequestAminoMsg;
    fromProtoMsg(message: QueryAllowancesRequestProtoMsg): QueryAllowancesRequest;
    toProto(message: QueryAllowancesRequest): Uint8Array;
    toProtoMsg(message: QueryAllowancesRequest): QueryAllowancesRequestProtoMsg;
};
export declare const QueryAllowancesResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryAllowancesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllowancesResponse;
    fromJSON(object: any): QueryAllowancesResponse;
    toJSON(message: QueryAllowancesResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllowancesResponse>): QueryAllowancesResponse;
    fromSDK(object: QueryAllowancesResponseSDKType): QueryAllowancesResponse;
    toSDK(message: QueryAllowancesResponse): QueryAllowancesResponseSDKType;
    fromAmino(object: QueryAllowancesResponseAmino): QueryAllowancesResponse;
    toAmino(message: QueryAllowancesResponse): QueryAllowancesResponseAmino;
    fromAminoMsg(object: QueryAllowancesResponseAminoMsg): QueryAllowancesResponse;
    toAminoMsg(message: QueryAllowancesResponse): QueryAllowancesResponseAminoMsg;
    fromProtoMsg(message: QueryAllowancesResponseProtoMsg): QueryAllowancesResponse;
    toProto(message: QueryAllowancesResponse): Uint8Array;
    toProtoMsg(message: QueryAllowancesResponse): QueryAllowancesResponseProtoMsg;
};