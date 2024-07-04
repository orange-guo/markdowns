"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[11885],{4979:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(74848),i=n(28453);const r={authors:["orange"],tags:["problem-solving","spring-boot","spring","github-pr"]},s="\u5347\u7ea7springboot3\u9047\u5230\u7684\u95ee\u9898",a={permalink:"/blog/2023/03/05/problem-springboot3-upgrade",source:"@site/blog/2023-03-05-problem-springboot3-upgrade.md",title:"\u5347\u7ea7springboot3\u9047\u5230\u7684\u95ee\u9898",description:"\u672c\u6587\u4e3b\u8981\u6574\u7406\u4e86\u5728\u5347\u7ea7springboot3\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898.",date:"2023-03-05T00:00:00.000Z",tags:[{inline:!0,label:"problem-solving",permalink:"/blog/tags/problem-solving"},{inline:!0,label:"spring-boot",permalink:"/blog/tags/spring-boot"},{inline:!0,label:"spring",permalink:"/blog/tags/spring"},{inline:!0,label:"github-pr",permalink:"/blog/tags/github-pr"}],readingTime:10.995,hasTruncateMarker:!0,authors:[{name:"orange",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"orange"}],frontMatter:{authors:["orange"],tags:["problem-solving","spring-boot","spring","github-pr"]},unlisted:!1,prevItem:{title:"\u4f7f\u7528spring\u6784\u5efanative\u9047\u5230\u7684\u95ee\u9898",permalink:"/blog/2023/03/06/problem-build-native-springboot-application"},nextItem:{title:"\u811a\u672c\u4e2d\u5b9e\u73b0\u4fee\u6539\u7528\u6237\u5bc6\u7801",permalink:"/blog/2023/03/03/passwd-in-script"}},c={authorsImageUrls:[void 0]},l=[{value:"\u5347\u7ea7<code>spring-boot3</code>\u540e\u4ee3\u7801\u4e2d\u7684<code>javax</code>\u5305\u9700\u8981\u5207\u6362\u4e3a<code>jakarta</code>",id:"\u5347\u7ea7spring-boot3\u540e\u4ee3\u7801\u4e2d\u7684javax\u5305\u9700\u8981\u5207\u6362\u4e3ajakarta",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3},{value:"querydsl\u4f9d\u8d56\u53d8\u66f4",id:"querydsl\u4f9d\u8d56\u53d8\u66f4",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-1",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-1",level:3},{value:"\u5347\u7ea7<code>spring-boot3</code>\u540e\u8bbf\u95ee\u7531<code>@PreAuthorize</code>\u6ce8\u89e3\u4fdd\u62a4\u7684\u63a5\u53e3\u62a5\u9519",id:"\u5347\u7ea7spring-boot3\u540e\u8bbf\u95ee\u7531preauthorize\u6ce8\u89e3\u4fdd\u62a4\u7684\u63a5\u53e3\u62a5\u9519",level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-2",level:3},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-2",level:3},{value:"\u5347\u7ea7<code>spring-boot3</code>\u540e\u4f7f\u7528Token\u8bf7\u6c42\u4fdd\u62a4\u8d44\u6e90\u62a5\u9519",id:"\u5347\u7ea7spring-boot3\u540e\u4f7f\u7528token\u8bf7\u6c42\u4fdd\u62a4\u8d44\u6e90\u62a5\u9519",level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0-1",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-3",level:3},{value:"\u5907\u6ce8",id:"\u5907\u6ce8-1",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-3",level:3},{value:"\u5347\u7ea7<code>spring-boot3</code>\u540e\u8bf7\u6c42<code>/swagger-ui/index.html</code>\u62a5\u9519",id:"\u5347\u7ea7spring-boot3\u540e\u8bf7\u6c42swagger-uiindexhtml\u62a5\u9519",level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0-2",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-4",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-4",level:3},{value:"\u4ee3\u7801\u8c03\u7528\u6d41\u7a0b",id:"\u4ee3\u7801\u8c03\u7528\u6d41\u7a0b",level:3},{value:"api\u63a5\u53e3\u62a5\u9519\u540e\u6ca1\u6709\u8fd4\u56de\u5f02\u5e38\u4fe1\u606f",id:"api\u63a5\u53e3\u62a5\u9519\u540e\u6ca1\u6709\u8fd4\u56de\u5f02\u5e38\u4fe1\u606f",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-5",level:3}];function d(t){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["\u672c\u6587\u4e3b\u8981\u6574\u7406\u4e86\u5728\u5347\u7ea7",(0,o.jsx)(e.code,{children:"springboot3"}),"\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898."]}),"\n",(0,o.jsxs)(e.h2,{id:"\u5347\u7ea7spring-boot3\u540e\u4ee3\u7801\u4e2d\u7684javax\u5305\u9700\u8981\u5207\u6362\u4e3ajakarta",children:["\u5347\u7ea7",(0,o.jsx)(e.code,{children:"spring-boot3"}),"\u540e\u4ee3\u7801\u4e2d\u7684",(0,o.jsx)(e.code,{children:"javax"}),"\u5305\u9700\u8981\u5207\u6362\u4e3a",(0,o.jsx)(e.code,{children:"jakarta"})]}),"\n",(0,o.jsxs)(e.p,{children:["\u9879\u76ee\u4e2d\u4f7f\u7528\u5230\u4e86",(0,o.jsx)(e.code,{children:"apache-guacamole-common"}),"\u4f9d\u8d56, \u8be5\u4f9d\u8d56\u4e2d\u4f7f\u7528\u4e86",(0,o.jsx)(e.code,{children:"javax"}),"\u5305"]}),"\n",(0,o.jsx)(e.h3,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,o.jsxs)(e.p,{children:["\u7531\u4e8e\u8be5\u4f9d\u8d56\u76ee\u524d\u6700\u65b0\u7684\u7248\u672c\u8fd8\u6ca1\u6709\u5347\u7ea7\u5230",(0,o.jsx)(e.code,{children:"jakarta"}),", \u6240\u4ee5\u9700\u8981\u76f8\u5173\u4f9d\u8d56\u4ee3\u7801\u590d\u5236\u5230\u9879\u76ee\u4e2d, \u5e76\u5c06",(0,o.jsx)(e.code,{children:"javax"}),"\u5305\u5207\u6362\u4e3a",(0,o.jsx)(e.code,{children:"jakarta"}),".",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",metastring:'title="GuacamoleWebSocketTunnelEndpoint.java"',children:'package com.fastonetech.remote.access.websocket;\n/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\nimport java.io.IOException;\nimport java.util.List;\nimport jakarta.websocket.CloseReason;\nimport jakarta.websocket.CloseReason.CloseCode;\nimport jakarta.websocket.Endpoint;\nimport jakarta.websocket.EndpointConfig;\nimport jakarta.websocket.MessageHandler;\nimport jakarta.websocket.OnClose;\nimport jakarta.websocket.OnMessage;\nimport jakarta.websocket.OnOpen;\nimport jakarta.websocket.RemoteEndpoint;\nimport jakarta.websocket.Session;\nimport org.apache.guacamole.GuacamoleException;\nimport org.apache.guacamole.io.GuacamoleReader;\nimport org.apache.guacamole.io.GuacamoleWriter;\nimport org.apache.guacamole.net.GuacamoleTunnel;\nimport org.apache.guacamole.GuacamoleClientException;\nimport org.apache.guacamole.GuacamoleConnectionClosedException;\nimport org.apache.guacamole.protocol.FilteredGuacamoleWriter;\nimport org.apache.guacamole.protocol.GuacamoleFilter;\nimport org.apache.guacamole.protocol.GuacamoleInstruction;\nimport org.apache.guacamole.protocol.GuacamoleStatus;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\n/**\n * A WebSocket implementation of GuacamoleTunnel functionality, compatible with\n * the Guacamole.WebSocketTunnel object included with the JavaScript API.\n * Messages sent/received are simply chunks of the Guacamole protocol\n * instruction stream.\n */\npublic abstract class GuacamoleWebSocketTunnelEndpoint extends Endpoint {\n\n\t/**\n\t * The default, minimum buffer size for instructions.\n\t */\n\tprivate static final int BUFFER_SIZE = 8192;\n\n\t/**\n\t * The opcode of the instruction used to indicate a connection stability\n\t * test ping request or response. Note that this instruction is\n\t * encapsulated within an internal tunnel instruction (with the opcode\n\t * being the empty string), thus this will actually be the value of the\n\t * first element of the received instruction.\n\t */\n\tprivate static final String PING_OPCODE = "ping";\n\n\t/**\n\t * Logger for this class.\n\t */\n\tprivate final Logger logger = LoggerFactory.getLogger(GuacamoleWebSocketTunnelEndpoint.class);\n\n\t/**\n\t * The underlying GuacamoleTunnel. WebSocket reads/writes will be handled\n\t * as reads/writes to this tunnel. This value may be null if no connection\n\t * has been established.\n\t */\n\tprivate GuacamoleTunnel tunnel;\n\n\t/**\n\t * Remote (client) side of this connection. This value will always be\n\t * non-null if tunnel is non-null.\n\t */\n\tprivate RemoteEndpoint.Basic remote;\n\n\t/**\n\t * Sends the numeric Guacaomle Status Code and Web Socket\n\t * code and closes the connection.\n\t *\n\t * @param session\n\t *     The outbound WebSocket connection to close.\n\t *\n\t * @param guacamoleStatusCode\n\t *     The numeric Guacamole status to send.\n\t *\n\t * @param webSocketCode\n\t *     The numeric WebSocket status to send.\n\t */\n\tprivate void closeConnection(Session session, int guacamoleStatusCode,\n\t\t\t\t\t\t\t\t int webSocketCode) {\n\n\t\ttry {\n\t\t\tCloseCode code = CloseReason.CloseCodes.getCloseCode(webSocketCode);\n\t\t\tString message = Integer.toString(guacamoleStatusCode);\n\t\t\tsession.close(new CloseReason(code, message));\n\t\t} catch (IOException e) {\n\t\t\tlogger.debug("Unable to close WebSocket connection.", e);\n\t\t}\n\n\t}\n\n\t/**\n\t * Sends the given Guacaomle Status and closes the given\n\t * connection.\n\t *\n\t * @param session\n\t *     The outbound WebSocket connection to close.\n\t *\n\t * @param guacStatus\n\t *     The status to use for the connection.\n\t */\n\tprivate void closeConnection(Session session, GuacamoleStatus guacStatus) {\n\t\tcloseConnection(session, guacStatus.getGuacamoleStatusCode(),\n\t\t\tguacStatus.getWebSocketCode());\n\t}\n\n\t/**\n\t * Sends a Guacamole instruction along the outbound WebSocket connection to\n\t * the connected Guacamole client. If an instruction is already in the\n\t * process of being sent by another thread, this function will block until\n\t * in-progress instructions are complete.\n\t *\n\t * @param instruction\n\t *     The instruction to send.\n\t *\n\t * @throws IOException\n\t *     If an I/O error occurs preventing the given instruction from being\n\t *     sent.\n\t */\n\tprivate void sendInstruction(String instruction)\n\t\tthrows IOException {\n\n\t\t// NOTE: Synchronization on the non-final remote field here is\n\t\t// intentional. The remote (the outbound websocket connection) is only\n\t\t// sensitive to simultaneous attempts to send messages with respect to\n\t\t// itself. If the remote changes, then the outbound websocket\n\t\t// connection has changed, and synchronization need only be performed\n\t\t// in context of the new remote.\n\t\tsynchronized (remote) {\n\t\t\tremote.sendText(instruction);\n\t\t}\n\n\t}\n\n\t/**\n\t * Sends a Guacamole instruction along the outbound WebSocket connection to\n\t * the connected Guacamole client. If an instruction is already in the\n\t * process of being sent by another thread, this function will block until\n\t * in-progress instructions are complete.\n\t *\n\t * @param instruction\n\t *     The instruction to send.\n\t *\n\t * @throws IOException\n\t *     If an I/O error occurs preventing the given instruction from being\n\t *     sent.\n\t */\n\tprivate void sendInstruction(GuacamoleInstruction instruction)\n\t\tthrows IOException {\n\t\tsendInstruction(instruction.toString());\n\t}\n\n\t/**\n\t * Returns a new tunnel for the given session. How this tunnel is created\n\t * or retrieved is implementation-dependent.\n\t *\n\t * @param session The session associated with the active WebSocket\n\t *                connection.\n\t * @param config Configuration information associated with the instance of\n\t *               the endpoint created for handling this single connection.\n\t * @return A connected tunnel, or null if no such tunnel exists.\n\t * @throws GuacamoleException If an error occurs while retrieving the\n\t *                            tunnel, or if access to the tunnel is denied.\n\t */\n\tprotected abstract GuacamoleTunnel createTunnel(Session session, EndpointConfig config)\n\t\tthrows GuacamoleException;\n\n\t@Override\n\t@OnOpen\n\tpublic void onOpen(final Session session, EndpointConfig config) {\n\n\t\t// Store underlying remote for future use via sendInstruction()\n\t\tremote = session.getBasicRemote();\n\n\t\ttry {\n\n\t\t\t// Get tunnel\n\t\t\ttunnel = createTunnel(session, config);\n\t\t\tif (tunnel == null) {\n\t\t\t\tcloseConnection(session, GuacamoleStatus.RESOURCE_NOT_FOUND);\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t} catch (GuacamoleException e) {\n\t\t\tlogger.error("Creation of WebSocket tunnel to guacd failed: {}", e.getMessage());\n\t\t\tlogger.debug("Error connecting WebSocket tunnel.", e);\n\t\t\tcloseConnection(session, e.getStatus().getGuacamoleStatusCode(),\n\t\t\t\te.getWebSocketCode());\n\t\t\treturn;\n\t\t}\n\n\t\t// Manually register message handler\n\t\tsession.addMessageHandler(new MessageHandler.Whole<String>() {\n\n\t\t\t@Override\n\t\t\tpublic void onMessage(String message) {\n\t\t\t\tGuacamoleWebSocketTunnelEndpoint.this.onMessage(message);\n\t\t\t}\n\n\t\t});\n\n\t\t// Prepare read transfer thread\n\t\tThread readThread = new Thread() {\n\n\t\t\t@Override\n\t\t\tpublic void run() {\n\n\t\t\t\tStringBuilder buffer = new StringBuilder(BUFFER_SIZE);\n\t\t\t\tGuacamoleReader reader = tunnel.acquireReader();\n\t\t\t\tchar[] readMessage;\n\n\t\t\t\ttry {\n\n\t\t\t\t\t// Send tunnel UUID\n\t\t\t\t\tsendInstruction(new GuacamoleInstruction(\n\t\t\t\t\t\tGuacamoleTunnel.INTERNAL_DATA_OPCODE,\n\t\t\t\t\t\ttunnel.getUUID().toString()\n\t\t\t\t\t));\n\n\t\t\t\t\ttry {\n\n\t\t\t\t\t\t// Attempt to read\n\t\t\t\t\t\twhile ((readMessage = reader.read()) != null) {\n\n\t\t\t\t\t\t\t// Buffer message\n\t\t\t\t\t\t\tbuffer.append(readMessage);\n\n\t\t\t\t\t\t\t// Flush if we expect to wait or buffer is getting full\n\t\t\t\t\t\t\tif (!reader.available() || buffer.length() >= BUFFER_SIZE) {\n\t\t\t\t\t\t\t\tsendInstruction(buffer.toString());\n\t\t\t\t\t\t\t\tbuffer.setLength(0);\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// No more data\n\t\t\t\t\t\tcloseConnection(session, GuacamoleStatus.SUCCESS);\n\n\t\t\t\t\t}\n\n\t\t\t\t\t// Catch any thrown guacamole exception and attempt\n\t\t\t\t\t// to pass within the WebSocket connection, logging\n\t\t\t\t\t// each error appropriately.\n\t\t\t\t\tcatch (GuacamoleClientException e) {\n\t\t\t\t\t\tlogger.info("WebSocket connection terminated: {}", e.getMessage());\n\t\t\t\t\t\tlogger.debug("WebSocket connection terminated due to client error.", e);\n\t\t\t\t\t\tcloseConnection(session, e.getStatus().getGuacamoleStatusCode(),\n\t\t\t\t\t\t\te.getWebSocketCode());\n\t\t\t\t\t} catch (GuacamoleConnectionClosedException e) {\n\t\t\t\t\t\tlogger.debug("Connection to guacd closed.", e);\n\t\t\t\t\t\tcloseConnection(session, GuacamoleStatus.SUCCESS);\n\t\t\t\t\t} catch (GuacamoleException e) {\n\t\t\t\t\t\tlogger.error("Connection to guacd terminated abnormally: {}", e.getMessage());\n\t\t\t\t\t\tlogger.debug("Internal error during connection to guacd.", e);\n\t\t\t\t\t\tcloseConnection(session, e.getStatus().getGuacamoleStatusCode(),\n\t\t\t\t\t\t\te.getWebSocketCode());\n\t\t\t\t\t}\n\n\t\t\t\t} catch (IOException e) {\n\t\t\t\t\tlogger.debug("I/O error prevents further reads.", e);\n\t\t\t\t\tcloseConnection(session, GuacamoleStatus.SERVER_ERROR);\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t};\n\n\t\treadThread.start();\n\n\t}\n\n\t@OnMessage\n\tpublic void onMessage(String message) {\n\n\t\t// Ignore inbound messages if there is no associated tunnel\n\t\tif (tunnel == null)\n\t\t\treturn;\n\n\t\t// Filter received instructions, handling tunnel-internal instructions\n\t\t// without passing through to guacd\n\t\tGuacamoleWriter writer = new FilteredGuacamoleWriter(tunnel.acquireWriter(), new GuacamoleFilter() {\n\n\t\t\t@Override\n\t\t\tpublic GuacamoleInstruction filter(GuacamoleInstruction instruction)\n\t\t\t\tthrows GuacamoleException {\n\n\t\t\t\t// Filter out all tunnel-internal instructions\n\t\t\t\tif (instruction.getOpcode().equals(GuacamoleTunnel.INTERNAL_DATA_OPCODE)) {\n\n\t\t\t\t\t// Respond to ping requests\n\t\t\t\t\tList<String> args = instruction.getArgs();\n\t\t\t\t\tif (args.size() >= 2 && args.get(0).equals(PING_OPCODE)) {\n\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\tsendInstruction(new GuacamoleInstruction(\n\t\t\t\t\t\t\t\tGuacamoleTunnel.INTERNAL_DATA_OPCODE,\n\t\t\t\t\t\t\t\tPING_OPCODE, args.get(1)\n\t\t\t\t\t\t\t));\n\t\t\t\t\t\t} catch (IOException e) {\n\t\t\t\t\t\t\tlogger.debug("Unable to send \\"ping\\" response for WebSocket tunnel.", e);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t\treturn null;\n\n\t\t\t\t}\n\n\t\t\t\t// Pass through all non-internal instructions untouched\n\t\t\t\treturn instruction;\n\n\t\t\t}\n\n\t\t});\n\n\t\ttry {\n\t\t\t// Write received message\n\t\t\twriter.write(message.toCharArray());\n\t\t} catch (GuacamoleConnectionClosedException e) {\n\t\t\tlogger.debug("Connection to guacd closed.", e);\n\t\t} catch (GuacamoleException e) {\n\t\t\tlogger.debug("WebSocket tunnel write failed.", e);\n\t\t}\n\n\t\ttunnel.releaseWriter();\n\n\t}\n\n\t@Override\n\t@OnClose\n\tpublic void onClose(Session session, CloseReason closeReason) {\n\n\t\ttry {\n\t\t\tif (tunnel != null)\n\t\t\t\ttunnel.close();\n\t\t} catch (GuacamoleException e) {\n\t\t\tlogger.debug("Unable to close WebSocket tunnel.", e);\n\t\t}\n\n\t}\n\n}\n\n'})}),"\n",(0,o.jsx)(e.h3,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://issues.apache.org/jira/browse/GUACAMOLE-1325",children:"Apache Tomcat 10.0 Servlet API incompatibility"})}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"querydsl\u4f9d\u8d56\u53d8\u66f4",children:"querydsl\u4f9d\u8d56\u53d8\u66f4"}),"\n",(0,o.jsxs)(e.p,{children:["\u7531\u4e8e",(0,o.jsx)(e.code,{children:"springboot3"}),"\u4e2d\u7684",(0,o.jsx)(e.code,{children:"javax"}),"\u4f9d\u8d56\u53d8\u4e3a\u4e86",(0,o.jsx)(e.code,{children:"jakarta"}),", \u6240\u4ee5",(0,o.jsx)(e.code,{children:"querydsl"}),"\u7684\u4f9d\u8d56\u4e5f\u9700\u8981\u53d8\u66f4"]}),"\n",(0,o.jsx)(e.h3,{id:"\u89e3\u51b3\u65b9\u6848-1",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,o.jsxs)(e.p,{children:["\u5c06",(0,o.jsx)(e.code,{children:"querydsl"}),"\u76f8\u5173\u4f9d\u8d56\u7684",(0,o.jsx)(e.code,{children:"classfiier"}),"\u8bbe\u7f6e\u4e3a",(0,o.jsx)(e.code,{children:"jakarta"}),"."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",metastring:'title="build.kts"',children:'implementation("com.querydsl:querydsl-jpa:5.0.0:jakarta")\nkapt("com.querydsl:querydsl-apt:5.0.0:jakarta")\n'})}),"\n",(0,o.jsx)(e.h3,{id:"\u53c2\u8003-1",children:"\u53c2\u8003"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/querydsl/querydsl/issues/3296",children:"Are there plans to support SpringBoot3.0(Java17)?"})}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"springboot3"}),"\u7684",(0,o.jsx)(e.code,{children:"javax"}),"\u4f9d\u8d56\u53d8\u4e3a\u4e86",(0,o.jsx)(e.code,{children:"jakarta"}),", \u4ee3\u7801\u4e2d\u9700\u8981\u5c06\u5305\u5bfc\u5165\u4ece",(0,o.jsx)(e.code,{children:"javax"}),"\u5207\u6362\u5230",(0,o.jsx)(e.code,{children:"jakarta"}),"."]}),"\n",(0,o.jsxs)(e.h2,{id:"\u5347\u7ea7spring-boot3\u540e\u8bbf\u95ee\u7531preauthorize\u6ce8\u89e3\u4fdd\u62a4\u7684\u63a5\u53e3\u62a5\u9519",children:["\u5347\u7ea7",(0,o.jsx)(e.code,{children:"spring-boot3"}),"\u540e\u8bbf\u95ee\u7531",(0,o.jsx)(e.code,{children:"@PreAuthorize"}),"\u6ce8\u89e3\u4fdd\u62a4\u7684\u63a5\u53e3\u62a5\u9519"]}),"\n",(0,o.jsxs)(e.p,{children:["\u5347\u7ea7",(0,o.jsx)(e.code,{children:"spring-boot3"}),"\u540e\u8bbf\u95ee\u7531",(0,o.jsx)(e.code,{children:"@PreAuthorize"}),"\u6ce8\u89e3\u4fdd\u62a4\u7684\u63a5\u53e3\u62a5\u9519, \u62a5\u9519\u4e3a401"]}),"\n",(0,o.jsx)(e.h3,{id:"\u539f\u56e0",children:"\u539f\u56e0"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"RoleHierarchy"}),"\u5931\u6548, \u5bfc\u81f4",(0,o.jsx)(e.code,{children:"MGMT_SUPER_ADMIN"}),"\u65e0\u6cd5\u8bbf\u95ee",(0,o.jsx)(e.code,{children:'@PreAuthorize("hasRole("MGMT_ADMIN")")'}),"\u6ce8\u89e3\u4fdd\u62a4\u7684\u63a5\u53e3\u3002",(0,o.jsx)("br",{}),"\n\u56e0\u4e3a",(0,o.jsx)(e.code,{children:"MGMT_SUPER_ADMIN"}),"\u7ee7\u627f\u81ea",(0,o.jsx)(e.code,{children:"MGMT_ADMIN"}),"\u3002",(0,o.jsx)("br",{}),"\n\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u7531",(0,o.jsx)(e.code,{children:"@EnableGlobalMethodSecurity"}),"\u5230",(0,o.jsx)(e.code,{children:"@EnableMethodSecurity"}),"\u7684\u8fc1\u79fb\u5bfc\u81f4\u3002",(0,o.jsx)("br",{}),"\n\u8fd9\u4e24\u8005\u5185\u90e8\u5bf9\u4e8e",(0,o.jsx)(e.code,{children:"defaultMethodExpressionHandler"}),"\u7684\u521d\u59cb\u5316\u884c\u4e3a\u4e0d\u4e00\u81f4\u5bfc\u81f4",(0,o.jsx)(e.code,{children:"RoleHierarchy"}),"\u5931\u6548\u3002",(0,o.jsx)("br",{}),"\n\u533a\u522b\u5982\u4e0b"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"@EnableGlobalMethodSecurity"}),"\n",(0,o.jsx)("br",{}),"\u5b9e\u73b0\u7c7b",(0,o.jsx)(e.code,{children:"GlobalMethodSecurityConfiguration"}),"\u521b\u5efa",(0,o.jsx)(e.code,{children:"defaultMethodExpressionHandler"}),"\u65f6\u4f1a\u5c1d\u8bd5\u4ece\u5bb9\u5668\u4e2d\u83b7\u53d6",(0,o.jsx)(e.code,{children:"RoleHierarchy"}),"\u3002"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"@EnableMethodSecurity"}),"\n",(0,o.jsx)("br",{}),"\u5b9e\u73b0\u7c7b",(0,o.jsx)(e.code,{children:"PrePostMethodSecurityConfiguration"}),"\u521b\u5efa",(0,o.jsx)(e.code,{children:"defaultMethodExpressionHandler"}),"\u65f6\u4e0d\u4f1a\u4ece\u5bb9\u5668\u4e2d\u83b7\u53d6",(0,o.jsx)(e.code,{children:"RoleHierarchy"}),"\u3002"]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"\u89e3\u51b3\u65b9\u6848-2",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\u4e3a",(0,o.jsx)(e.code,{children:"spring-security"}),"\u521b\u5efa",(0,o.jsx)(e.code,{children:"pull request"}),"\u786e\u4fdd\u521d\u59cb\u5316",(0,o.jsx)(e.code,{children:"defaultMethodExpressionHandler"}),"\u884c\u4e3a\u4fdd\u6301\u4e00\u81f4"]}),"\n",(0,o.jsxs)(e.li,{children:["\u5bf9\u4e8e\u81ea\u8eab\u9879\u76ee\u5f53\u524d\u7684\u89e3\u51b3\u529e\u6cd5\u662f\u521d\u59cb\u5316",(0,o.jsx)(e.code,{children:"MethodExpressionHandler"})]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"\u5907\u6ce8",children:"\u5907\u6ce8"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",metastring:'title="GlobalMethodSecurityConfiguration.java"',children:"public class GlobalMethodSecurityConfiguration implements ImportAware, SmartInitializingSingleton, BeanFactoryAware {\n\n\t@Override\n\tpublic void afterSingletonsInstantiated() {\n\t\ttry {\n\t\t\tinitializeMethodSecurityInterceptor();\n\t\t} catch (Exception ex) {\n\t\t\tthrow new RuntimeException(ex);\n\t\t}\n\t\tPermissionEvaluator permissionEvaluator = getSingleBeanOrNull(PermissionEvaluator.class);\n\t\tif (permissionEvaluator != null) {\n\t\t\tthis.defaultMethodExpressionHandler.setPermissionEvaluator(permissionEvaluator);\n\t\t}\n\t\tRoleHierarchy roleHierarchy = getSingleBeanOrNull(RoleHierarchy.class);\n\t\tif (roleHierarchy != null) {\n\t\t\tthis.defaultMethodExpressionHandler.setRoleHierarchy(roleHierarchy);\n\t\t}\n\t\tAuthenticationTrustResolver trustResolver = getSingleBeanOrNull(AuthenticationTrustResolver.class);\n\t\tif (trustResolver != null) {\n\t\t\tthis.defaultMethodExpressionHandler.setTrustResolver(trustResolver);\n\t\t}\n\t\tGrantedAuthorityDefaults grantedAuthorityDefaults = getSingleBeanOrNull(GrantedAuthorityDefaults.class);\n\t\tif (grantedAuthorityDefaults != null) {\n\t\t\tthis.defaultMethodExpressionHandler.setDefaultRolePrefix(grantedAuthorityDefaults.getRolePrefix());\n\t\t}\n\n\t\tthis.defaultMethodExpressionHandler = this.objectPostProcessor.postProcess(this.defaultMethodExpressionHandler);\n\t}\n\n}\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",metastring:'title="PrePostMethodSecurityConfiguration.java"',children:"final class PrePostMethodSecurityConfiguration {\n\n\tprivate static MethodSecurityExpressionHandler defaultExpressionHandler(\n\t\tObjectProvider<GrantedAuthorityDefaults> defaultsProvider, ApplicationContext context) {\n\t\tDefaultMethodSecurityExpressionHandler handler = new DefaultMethodSecurityExpressionHandler();\n\t\tdefaultsProvider.ifAvailable((d) -> handler.setDefaultRolePrefix(d.getRolePrefix()));\n\t\thandler.setApplicationContext(context);\n\t\treturn handler;\n\t}\n\n}\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u53c2\u8003-2",children:"\u53c2\u8003"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/spring-projects/spring-security/issues/12662",children:"issue"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/spring-projects/spring-security/pull/12673",children:"pull request"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/spring-projects/spring-security/blob/6.0.x/config/src/main/java/org/springframework/security/config/annotation/method/configuration/GlobalMethodSecurityConfiguration.java",children:"GlobalMethodSecurityConfiguration.java "})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/spring-projects/spring-security/blob/6.0.x/config/src/main/java/org/springframework/security/config/annotation/method/configuration/PrePostMethodSecurityConfiguration.java",children:"PrePostMethodSecurityConfiguration.java"})}),"\n"]}),"\n",(0,o.jsxs)(e.h2,{id:"\u5347\u7ea7spring-boot3\u540e\u4f7f\u7528token\u8bf7\u6c42\u4fdd\u62a4\u8d44\u6e90\u62a5\u9519",children:["\u5347\u7ea7",(0,o.jsx)(e.code,{children:"spring-boot3"}),"\u540e\u4f7f\u7528Token\u8bf7\u6c42\u4fdd\u62a4\u8d44\u6e90\u62a5\u9519"]}),"\n",(0,o.jsx)(e.p,{children:"\u4f7f\u7528Token\u8bf7\u6c42\u4fdd\u62a4\u8d44\u6e90\u62a5\u9519401"}),"\n",(0,o.jsx)(e.h3,{id:"\u539f\u56e0-1",children:"\u539f\u56e0"}),"\n",(0,o.jsxs)(e.p,{children:["\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f",(0,o.jsx)(e.code,{children:"spring-security"}),"\u4e2d\u8fdb\u884c\u4e86\u91cd\u6784\u9700\u8981\u5bf9",(0,o.jsx)(e.code,{children:"securityContext"}),"\u8fdb\u884c\u914d\u7f6e"]}),"\n",(0,o.jsx)(e.h3,{id:"\u89e3\u51b3\u65b9\u6848-3",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"http.securityContext().requireExplicitSave(false).and()"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.code,{children:"http.securityContext().securityContextRepository(new HttpSessionSecurityContextRepository()).and()"})}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"\u5907\u6ce8-1",children:"\u5907\u6ce8"}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["spring6\u4e4b\u540eSecurityContextHolderFilter\u66ff\u6362\u4e86SecurityContextPersistenceFilter",(0,o.jsx)("br",{}),"\nSecurityContextRepository\u9ed8\u8ba4\u5b9e\u73b0\u4e5f\u53d8\u4e86",(0,o.jsx)("br",{}),"\n(HttpSessionSecurityContextRepository) -> (RequestAttributeSecurityContextRepository)",(0,o.jsx)("br",{})]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"\u53c2\u8003-3",children:"\u53c2\u8003"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://stackoverflow.com/questions/74629234/spring-security-6-customauthenticationfilterintend-to-replace-the-usernamepassw",children:"Spring Security 6 CustomAuthenticationFilter(intend to replace the UsernamePasswordAuthenticationFilter) does not work"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/spring-projects/spring-security/issues/11110",children:"Default to SecurityContextHolderFilter instead of SecurityContextPersistenceFilter #11110"})}),"\n"]}),"\n",(0,o.jsxs)(e.h2,{id:"\u5347\u7ea7spring-boot3\u540e\u8bf7\u6c42swagger-uiindexhtml\u62a5\u9519",children:["\u5347\u7ea7",(0,o.jsx)(e.code,{children:"spring-boot3"}),"\u540e\u8bf7\u6c42",(0,o.jsx)(e.code,{children:"/swagger-ui/index.html"}),"\u62a5\u9519"]}),"\n",(0,o.jsx)(e.p,{children:"\u63a5\u53e3\u62a5\u9519, \u5185\u5bb9\u5982\u4e0b"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-log",metastring:'title="chrome"',children:"This page isn\u2019t working\nIf the problem continues, contact the site owner.\nHTTP ERROR 401\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u539f\u56e0-2",children:"\u539f\u56e0"}),"\n",(0,o.jsxs)(e.p,{children:["springdoc\u7248\u672c\u8fc7\u8001, \u9700\u8981\u5347\u7ea7\u5230v2\u7248\u672c\u3002",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(e.a,{href:"https://springdoc.org/",children:"springdoc.org"}),"\n\u4e0a\u7684\u6709\u76f8\u5173\u8bf4\u660e",(0,o.jsx)(e.code,{children:"For spring-boot v3 support, make sure you use springdoc-openapi v2"})]}),"\n",(0,o.jsx)(e.p,{children:"\u672c\u9879\u76ee\u7684\u539f\u59cb\u914d\u7f6e\u5982\u4e0b"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",metastring:'title="pom.xml"',children:"\n<dependency>\n\t<groupId>org.springdoc</groupId>\n\t<artifactId>springdoc-openapi-ui</artifactId>\n\t<version>1.6.14</version>\n</dependency>\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u89e3\u51b3\u65b9\u6848-4",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,o.jsx)(e.p,{children:"\u5347\u7ea7springdoc\u7248\u672c\u5230v2, \u5347\u7ea7\u540e\u7684\u914d\u7f6e\u5982\u4e0b, v2\u7684artifactId\u53d1\u751f\u4e86\u53d8\u5316"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-xml",metastring:'title="pom.xml"',children:"\n<dependency>\n\t<groupId>org.springdoc</groupId>\n\t<artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>\n\t<version>2.0.2</version>\n</dependency>\n"})}),"\n",(0,o.jsx)(e.h3,{id:"\u53c2\u8003-4",children:"\u53c2\u8003"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://springdoc.org/",children:"springdoc.org"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://springdoc.org/v2/",children:"springdocv2"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://stackoverflow.com/questions/74614369/how-to-run-swagger-3-on-spring-boot-3",children:"How to run Swagger 3 on Spring Boot 3"})}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"\u4ee3\u7801\u8c03\u7528\u6d41\u7a0b",children:"\u4ee3\u7801\u8c03\u7528\u6d41\u7a0b"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-log",metastring:'title="AuthorizationFilter.doFilter"',children:"this.authorizationManager.check(this::getAuthentication, request);\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-log",metastring:'title="ObservationAuthorizationManager.check"',children:"AuthorizationDecision decision = this.delegate.check(wrapped, object);\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-log",metastring:'title="RequestMatcherDelegatingAuthorizationManager.check"',children:"matcher.matcher(request);\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-log",metastring:'title="MvcRequestMatcher.matcher"',children:"// \u8fd4\u56de\u4e86`path`\u4e3a`/error`\u7684`handlerMapping`(\u8bf4\u660e\u6ca1\u6709\u627e\u5230\u5bf9\u5e94\u7684`handlerMapping`)\nMatchableHandlerMapping mapping = getMapping(request);\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-log",metastring:'title="RequestMatcherDelegatingAuthorizationManager.check"',children:"RequestMatcher matcher = mapping.getRequestMatcher();\nMatchResult matchResult = matcher.matcher(request);\n// \u7531\u4e8eswagger\u5bf9\u5e94\u7684handler\u627e\u4e0d\u5230, \u6240\u4ee5\u6ca1\u6709Match\nif (matchResult.isMatch()) {\n\tAuthorizationManager<RequestAuthorizationContext> manager = mapping.getEntry();\n\tif (this.logger.isTraceEnabled()) {\n\t\tthis.logger.trace(LogMessage.format(\"Checking authorization on %s using %s\", request, manager));\n\t}\n\t// \u540e\u7eed\u547d\u4e2d\u4e86Mvc [pattern='/*/*.html']\u5bf9\u5e94\u7684Matcher, \u800c\u8be5Matcher\u5bf9\u5e94\u7684\u5339\u914d\u89c4\u5219\u8981\u6c42\u9700\u8981`authentication`\u4e0d\u4e3a\u7a7a, \u5bfc\u81f4\u62a5\u9519\n\treturn manager.check(authentication, new RequestAuthorizationContext(request, matchResult.getVariables()));\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"api\u63a5\u53e3\u62a5\u9519\u540e\u6ca1\u6709\u8fd4\u56de\u5f02\u5e38\u4fe1\u606f",children:"api\u63a5\u53e3\u62a5\u9519\u540e\u6ca1\u6709\u8fd4\u56de\u5f02\u5e38\u4fe1\u606f"}),"\n",(0,o.jsx)(e.h3,{id:"\u89e3\u51b3\u65b9\u6848-5",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,o.jsxs)(e.p,{children:["\u65b0\u7248\u672c\u7684",(0,o.jsx)(e.code,{children:"spring-boot"}),"\u9ed8\u8ba4\u4e0d\u8fd4\u56de\u5f02\u5e38\u4fe1\u606f, \u9700\u8981\u5728",(0,o.jsx)(e.code,{children:"application.yml"}),"\u4e2d\u589e\u52a0\u4ee5\u4e0b\u914d\u7f6e"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-yaml",children:"server:\n  error:\n    include-message: always\n"})})]})}function u(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>a});var o=n(96540);const i={},r=o.createContext(i);function s(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);