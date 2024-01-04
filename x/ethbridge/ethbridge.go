package ethbridge

import (
	"poc-cosmos/x/ethbridge/querier"
	"poc-cosmos/x/ethbridge/types"
)

type (
	MsgMakeEthBridgeClaim = types.MsgMakeEthBridgeClaim
)

var (
	NewMsgMakeEthBridgeClaim = types.NewMsgMakeEthBridgeClaim
	NewEthBridgeClaim        = types.NewEthBridgeClaim

	NewQueryEthProphecyParams = types.NewQueryEthProphecyParams

	ErrInvalidEthNonce = types.ErrInvalidEthNonce

	RegisterCodec = types.RegisterCodec

	NewQuerier = querier.NewQuerier
)

const (
	StoreKey         = types.StoreKey
	QuerierRoute     = types.QuerierRoute
	RouterKey        = types.RouterKey
	DefaultCodespace = types.DefaultCodespace

	QueryEthProphecy = querier.QueryEthProphecy
)
