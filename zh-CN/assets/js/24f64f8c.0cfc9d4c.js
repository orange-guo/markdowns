"use strict";(self.webpackChunkmarkdowns=self.webpackChunkmarkdowns||[]).push([[3865],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=a,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||r;return t?o.createElement(m,i(i({ref:n},u),{},{components:t})):o.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9207:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(7462),a=(t(7294),t(3905));const r={authors:["xiangcheng.kuo"],tags:["problem-solving","spring-boot","spring"]},i="\u5347\u7ea7springboot3\u9047\u5230\u7684\u95ee\u9898",l={permalink:"/zh-CN/blog/2023/03/05/problem-springboot3-upgrade",source:"@site/blog/2023-03-05/problem-springboot3-upgrade.md",title:"\u5347\u7ea7springboot3\u9047\u5230\u7684\u95ee\u9898",description:"\u672c\u6587\u4e3b\u8981\u6574\u7406\u4e86\u5728\u5347\u7ea7springboot3\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898.",date:"2023-03-05T00:00:00.000Z",formattedDate:"2023\u5e743\u67085\u65e5",tags:[{label:"problem-solving",permalink:"/zh-CN/blog/tags/problem-solving"},{label:"spring-boot",permalink:"/zh-CN/blog/tags/spring-boot"},{label:"spring",permalink:"/zh-CN/blog/tags/spring"}],readingTime:10.995,hasTruncateMarker:!0,authors:[{name:"Xiangcheng Kuo",title:"programmer on jvm platform",url:"https://github.com/orange-guo",imageURL:"https://github.com/orange-guo.png",key:"xiangcheng.kuo"}],frontMatter:{authors:["xiangcheng.kuo"],tags:["problem-solving","spring-boot","spring"]},prevItem:{title:"\u4f7f\u7528spring\u6784\u5efanative\u9047\u5230\u7684\u95ee\u9898",permalink:"/zh-CN/blog/2023/03/06/problem-build-native-springboot-application"},nextItem:{title:"\u811a\u672c\u4e2d\u5b9e\u73b0\u4fee\u6539\u7528\u6237\u5bc6\u7801",permalink:"/zh-CN/blog/2023/03/03/passwd-in-script"}},s={authorsImageUrls:[void 0]},c=[{value:"\u5347\u7ea7<code>spring-boot3</code>\u540e\u4ee3\u7801\u4e2d\u7684<code>javax</code>\u5305\u9700\u8981\u5207\u6362\u4e3a<code>jakarta</code>",id:"\u5347\u7ea7spring-boot3\u540e\u4ee3\u7801\u4e2d\u7684javax\u5305\u9700\u8981\u5207\u6362\u4e3ajakarta",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3},{value:"querydsl\u4f9d\u8d56\u53d8\u66f4",id:"querydsl\u4f9d\u8d56\u53d8\u66f4",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-1",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-1",level:3},{value:"\u5347\u7ea7<code>spring-boot3</code>\u540e\u8bbf\u95ee\u7531<code>@PreAuthorize</code>\u6ce8\u89e3\u4fdd\u62a4\u7684\u63a5\u53e3\u62a5\u9519",id:"\u5347\u7ea7spring-boot3\u540e\u8bbf\u95ee\u7531preauthorize\u6ce8\u89e3\u4fdd\u62a4\u7684\u63a5\u53e3\u62a5\u9519",level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-2",level:3},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-2",level:3},{value:"\u5347\u7ea7<code>spring-boot3</code>\u540e\u4f7f\u7528Token\u8bf7\u6c42\u4fdd\u62a4\u8d44\u6e90\u62a5\u9519",id:"\u5347\u7ea7spring-boot3\u540e\u4f7f\u7528token\u8bf7\u6c42\u4fdd\u62a4\u8d44\u6e90\u62a5\u9519",level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0-1",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-3",level:3},{value:"\u5907\u6ce8",id:"\u5907\u6ce8-1",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-3",level:3},{value:"\u5347\u7ea7<code>spring-boot3</code>\u540e\u8bf7\u6c42<code>/swagger-ui/index.html</code>\u62a5\u9519",id:"\u5347\u7ea7spring-boot3\u540e\u8bf7\u6c42swagger-uiindexhtml\u62a5\u9519",level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0-2",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-4",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003-4",level:3},{value:"\u4ee3\u7801\u8c03\u7528\u6d41\u7a0b",id:"\u4ee3\u7801\u8c03\u7528\u6d41\u7a0b",level:3},{value:"api\u63a5\u53e3\u62a5\u9519\u540e\u6ca1\u6709\u8fd4\u56de\u5f02\u5e38\u4fe1\u606f",id:"api\u63a5\u53e3\u62a5\u9519\u540e\u6ca1\u6709\u8fd4\u56de\u5f02\u5e38\u4fe1\u606f",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848-5",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u6574\u7406\u4e86\u5728\u5347\u7ea7",(0,a.kt)("inlineCode",{parentName:"p"},"springboot3"),"\u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898."),(0,a.kt)("h2",{id:"\u5347\u7ea7spring-boot3\u540e\u4ee3\u7801\u4e2d\u7684javax\u5305\u9700\u8981\u5207\u6362\u4e3ajakarta"},"\u5347\u7ea7",(0,a.kt)("inlineCode",{parentName:"h2"},"spring-boot3"),"\u540e\u4ee3\u7801\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"h2"},"javax"),"\u5305\u9700\u8981\u5207\u6362\u4e3a",(0,a.kt)("inlineCode",{parentName:"h2"},"jakarta")),(0,a.kt)("p",null,"\u9879\u76ee\u4e2d\u4f7f\u7528\u5230\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"apache-guacamole-common"),"\u4f9d\u8d56, \u8be5\u4f9d\u8d56\u4e2d\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"javax"),"\u5305"),(0,a.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("p",null,"\u7531\u4e8e\u8be5\u4f9d\u8d56\u76ee\u524d\u6700\u65b0\u7684\u7248\u672c\u8fd8\u6ca1\u6709\u5347\u7ea7\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"jakarta"),", \u6240\u4ee5\u9700\u8981\u76f8\u5173\u4f9d\u8d56\u4ee3\u7801\u590d\u5236\u5230\u9879\u76ee\u4e2d, \u5e76\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"javax"),"\u5305\u5207\u6362\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"jakarta"),".",(0,a.kt)("br",null)),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="GuacamoleWebSocketTunnelEndpoint.java"',title:'"GuacamoleWebSocketTunnelEndpoint.java"'},'package com.fastonetech.remote.access.websocket;\n/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\nimport java.io.IOException;\nimport java.util.List;\nimport jakarta.websocket.CloseReason;\nimport jakarta.websocket.CloseReason.CloseCode;\nimport jakarta.websocket.Endpoint;\nimport jakarta.websocket.EndpointConfig;\nimport jakarta.websocket.MessageHandler;\nimport jakarta.websocket.OnClose;\nimport jakarta.websocket.OnMessage;\nimport jakarta.websocket.OnOpen;\nimport jakarta.websocket.RemoteEndpoint;\nimport jakarta.websocket.Session;\nimport org.apache.guacamole.GuacamoleException;\nimport org.apache.guacamole.io.GuacamoleReader;\nimport org.apache.guacamole.io.GuacamoleWriter;\nimport org.apache.guacamole.net.GuacamoleTunnel;\nimport org.apache.guacamole.GuacamoleClientException;\nimport org.apache.guacamole.GuacamoleConnectionClosedException;\nimport org.apache.guacamole.protocol.FilteredGuacamoleWriter;\nimport org.apache.guacamole.protocol.GuacamoleFilter;\nimport org.apache.guacamole.protocol.GuacamoleInstruction;\nimport org.apache.guacamole.protocol.GuacamoleStatus;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\n/**\n * A WebSocket implementation of GuacamoleTunnel functionality, compatible with\n * the Guacamole.WebSocketTunnel object included with the JavaScript API.\n * Messages sent/received are simply chunks of the Guacamole protocol\n * instruction stream.\n */\npublic abstract class GuacamoleWebSocketTunnelEndpoint extends Endpoint {\n\n    /**\n     * The default, minimum buffer size for instructions.\n     */\n    private static final int BUFFER_SIZE = 8192;\n\n    /**\n     * The opcode of the instruction used to indicate a connection stability\n     * test ping request or response. Note that this instruction is\n     * encapsulated within an internal tunnel instruction (with the opcode\n     * being the empty string), thus this will actually be the value of the\n     * first element of the received instruction.\n     */\n    private static final String PING_OPCODE = "ping";\n\n    /**\n     * Logger for this class.\n     */\n    private final Logger logger = LoggerFactory.getLogger(GuacamoleWebSocketTunnelEndpoint.class);\n\n    /**\n     * The underlying GuacamoleTunnel. WebSocket reads/writes will be handled\n     * as reads/writes to this tunnel. This value may be null if no connection\n     * has been established.\n     */\n    private GuacamoleTunnel tunnel;\n\n    /**\n     * Remote (client) side of this connection. This value will always be\n     * non-null if tunnel is non-null.\n     */\n    private RemoteEndpoint.Basic remote;\n\n    /**\n     * Sends the numeric Guacaomle Status Code and Web Socket\n     * code and closes the connection.\n     *\n     * @param session\n     *     The outbound WebSocket connection to close.\n     *\n     * @param guacamoleStatusCode\n     *     The numeric Guacamole status to send.\n     *\n     * @param webSocketCode\n     *     The numeric WebSocket status to send.\n     */\n    private void closeConnection(Session session, int guacamoleStatusCode,\n                                 int webSocketCode) {\n\n        try {\n            CloseCode code = CloseReason.CloseCodes.getCloseCode(webSocketCode);\n            String message = Integer.toString(guacamoleStatusCode);\n            session.close(new CloseReason(code, message));\n        } catch (IOException e) {\n            logger.debug("Unable to close WebSocket connection.", e);\n        }\n\n    }\n\n    /**\n     * Sends the given Guacaomle Status and closes the given\n     * connection.\n     *\n     * @param session\n     *     The outbound WebSocket connection to close.\n     *\n     * @param guacStatus\n     *     The status to use for the connection.\n     */\n    private void closeConnection(Session session, GuacamoleStatus guacStatus) {\n        closeConnection(session, guacStatus.getGuacamoleStatusCode(),\n            guacStatus.getWebSocketCode());\n    }\n\n    /**\n     * Sends a Guacamole instruction along the outbound WebSocket connection to\n     * the connected Guacamole client. If an instruction is already in the\n     * process of being sent by another thread, this function will block until\n     * in-progress instructions are complete.\n     *\n     * @param instruction\n     *     The instruction to send.\n     *\n     * @throws IOException\n     *     If an I/O error occurs preventing the given instruction from being\n     *     sent.\n     */\n    private void sendInstruction(String instruction)\n        throws IOException {\n\n        // NOTE: Synchronization on the non-final remote field here is\n        // intentional. The remote (the outbound websocket connection) is only\n        // sensitive to simultaneous attempts to send messages with respect to\n        // itself. If the remote changes, then the outbound websocket\n        // connection has changed, and synchronization need only be performed\n        // in context of the new remote.\n        synchronized (remote) {\n            remote.sendText(instruction);\n        }\n\n    }\n\n    /**\n     * Sends a Guacamole instruction along the outbound WebSocket connection to\n     * the connected Guacamole client. If an instruction is already in the\n     * process of being sent by another thread, this function will block until\n     * in-progress instructions are complete.\n     *\n     * @param instruction\n     *     The instruction to send.\n     *\n     * @throws IOException\n     *     If an I/O error occurs preventing the given instruction from being\n     *     sent.\n     */\n    private void sendInstruction(GuacamoleInstruction instruction)\n        throws IOException {\n        sendInstruction(instruction.toString());\n    }\n\n    /**\n     * Returns a new tunnel for the given session. How this tunnel is created\n     * or retrieved is implementation-dependent.\n     *\n     * @param session The session associated with the active WebSocket\n     *                connection.\n     * @param config Configuration information associated with the instance of\n     *               the endpoint created for handling this single connection.\n     * @return A connected tunnel, or null if no such tunnel exists.\n     * @throws GuacamoleException If an error occurs while retrieving the\n     *                            tunnel, or if access to the tunnel is denied.\n     */\n    protected abstract GuacamoleTunnel createTunnel(Session session, EndpointConfig config)\n        throws GuacamoleException;\n\n    @Override\n    @OnOpen\n    public void onOpen(final Session session, EndpointConfig config) {\n\n        // Store underlying remote for future use via sendInstruction()\n        remote = session.getBasicRemote();\n\n        try {\n\n            // Get tunnel\n            tunnel = createTunnel(session, config);\n            if (tunnel == null) {\n                closeConnection(session, GuacamoleStatus.RESOURCE_NOT_FOUND);\n                return;\n            }\n\n        } catch (GuacamoleException e) {\n            logger.error("Creation of WebSocket tunnel to guacd failed: {}", e.getMessage());\n            logger.debug("Error connecting WebSocket tunnel.", e);\n            closeConnection(session, e.getStatus().getGuacamoleStatusCode(),\n                e.getWebSocketCode());\n            return;\n        }\n\n        // Manually register message handler\n        session.addMessageHandler(new MessageHandler.Whole<String>() {\n\n            @Override\n            public void onMessage(String message) {\n                GuacamoleWebSocketTunnelEndpoint.this.onMessage(message);\n            }\n\n        });\n\n        // Prepare read transfer thread\n        Thread readThread = new Thread() {\n\n            @Override\n            public void run() {\n\n                StringBuilder buffer = new StringBuilder(BUFFER_SIZE);\n                GuacamoleReader reader = tunnel.acquireReader();\n                char[] readMessage;\n\n                try {\n\n                    // Send tunnel UUID\n                    sendInstruction(new GuacamoleInstruction(\n                        GuacamoleTunnel.INTERNAL_DATA_OPCODE,\n                        tunnel.getUUID().toString()\n                    ));\n\n                    try {\n\n                        // Attempt to read\n                        while ((readMessage = reader.read()) != null) {\n\n                            // Buffer message\n                            buffer.append(readMessage);\n\n                            // Flush if we expect to wait or buffer is getting full\n                            if (!reader.available() || buffer.length() >= BUFFER_SIZE) {\n                                sendInstruction(buffer.toString());\n                                buffer.setLength(0);\n                            }\n\n                        }\n\n                        // No more data\n                        closeConnection(session, GuacamoleStatus.SUCCESS);\n\n                    }\n\n                    // Catch any thrown guacamole exception and attempt\n                    // to pass within the WebSocket connection, logging\n                    // each error appropriately.\n                    catch (GuacamoleClientException e) {\n                        logger.info("WebSocket connection terminated: {}", e.getMessage());\n                        logger.debug("WebSocket connection terminated due to client error.", e);\n                        closeConnection(session, e.getStatus().getGuacamoleStatusCode(),\n                            e.getWebSocketCode());\n                    } catch (GuacamoleConnectionClosedException e) {\n                        logger.debug("Connection to guacd closed.", e);\n                        closeConnection(session, GuacamoleStatus.SUCCESS);\n                    } catch (GuacamoleException e) {\n                        logger.error("Connection to guacd terminated abnormally: {}", e.getMessage());\n                        logger.debug("Internal error during connection to guacd.", e);\n                        closeConnection(session, e.getStatus().getGuacamoleStatusCode(),\n                            e.getWebSocketCode());\n                    }\n\n                } catch (IOException e) {\n                    logger.debug("I/O error prevents further reads.", e);\n                    closeConnection(session, GuacamoleStatus.SERVER_ERROR);\n                }\n\n            }\n\n        };\n\n        readThread.start();\n\n    }\n\n    @OnMessage\n    public void onMessage(String message) {\n\n        // Ignore inbound messages if there is no associated tunnel\n        if (tunnel == null)\n            return;\n\n        // Filter received instructions, handling tunnel-internal instructions\n        // without passing through to guacd\n        GuacamoleWriter writer = new FilteredGuacamoleWriter(tunnel.acquireWriter(), new GuacamoleFilter() {\n\n            @Override\n            public GuacamoleInstruction filter(GuacamoleInstruction instruction)\n                throws GuacamoleException {\n\n                // Filter out all tunnel-internal instructions\n                if (instruction.getOpcode().equals(GuacamoleTunnel.INTERNAL_DATA_OPCODE)) {\n\n                    // Respond to ping requests\n                    List<String> args = instruction.getArgs();\n                    if (args.size() >= 2 && args.get(0).equals(PING_OPCODE)) {\n\n                        try {\n                            sendInstruction(new GuacamoleInstruction(\n                                GuacamoleTunnel.INTERNAL_DATA_OPCODE,\n                                PING_OPCODE, args.get(1)\n                            ));\n                        } catch (IOException e) {\n                            logger.debug("Unable to send \\"ping\\" response for WebSocket tunnel.", e);\n                        }\n\n                    }\n\n                    return null;\n\n                }\n\n                // Pass through all non-internal instructions untouched\n                return instruction;\n\n            }\n\n        });\n\n        try {\n            // Write received message\n            writer.write(message.toCharArray());\n        } catch (GuacamoleConnectionClosedException e) {\n            logger.debug("Connection to guacd closed.", e);\n        } catch (GuacamoleException e) {\n            logger.debug("WebSocket tunnel write failed.", e);\n        }\n\n        tunnel.releaseWriter();\n\n    }\n\n    @Override\n    @OnClose\n    public void onClose(Session session, CloseReason closeReason) {\n\n        try {\n            if (tunnel != null)\n                tunnel.close();\n        } catch (GuacamoleException e) {\n            logger.debug("Unable to close WebSocket tunnel.", e);\n        }\n\n    }\n\n}\n\n')),(0,a.kt)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/GUACAMOLE-1325"},"Apache Tomcat 10.0 Servlet API incompatibility"))),(0,a.kt)("h2",{id:"querydsl\u4f9d\u8d56\u53d8\u66f4"},"querydsl\u4f9d\u8d56\u53d8\u66f4"),(0,a.kt)("p",null,"\u7531\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"springboot3"),"\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"javax"),"\u4f9d\u8d56\u53d8\u4e3a\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"jakarta"),", \u6240\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"querydsl"),"\u7684\u4f9d\u8d56\u4e5f\u9700\u8981\u53d8\u66f4"),(0,a.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848-1"},"\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("p",null,"\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"querydsl"),"\u76f8\u5173\u4f9d\u8d56\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"classfiier"),"\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"jakarta"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.kts"',title:'"build.kts"'},'implementation("com.querydsl:querydsl-jpa:5.0.0:jakarta")\nkapt("com.querydsl:querydsl-apt:5.0.0:jakarta")\n')),(0,a.kt)("h3",{id:"\u53c2\u8003-1"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/querydsl/querydsl/issues/3296"},"Are there plans to support SpringBoot3.0(Java17)?"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"springboot3"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"javax"),"\u4f9d\u8d56\u53d8\u4e3a\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"jakarta"),", \u4ee3\u7801\u4e2d\u9700\u8981\u5c06\u5305\u5bfc\u5165\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"javax"),"\u5207\u6362\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"jakarta"),"."),(0,a.kt)("h2",{id:"\u5347\u7ea7spring-boot3\u540e\u8bbf\u95ee\u7531preauthorize\u6ce8\u89e3\u4fdd\u62a4\u7684\u63a5\u53e3\u62a5\u9519"},"\u5347\u7ea7",(0,a.kt)("inlineCode",{parentName:"h2"},"spring-boot3"),"\u540e\u8bbf\u95ee\u7531",(0,a.kt)("inlineCode",{parentName:"h2"},"@PreAuthorize"),"\u6ce8\u89e3\u4fdd\u62a4\u7684\u63a5\u53e3\u62a5\u9519"),(0,a.kt)("p",null,"\u5347\u7ea7",(0,a.kt)("inlineCode",{parentName:"p"},"spring-boot3"),"\u540e\u8bbf\u95ee\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"@PreAuthorize"),"\u6ce8\u89e3\u4fdd\u62a4\u7684\u63a5\u53e3\u62a5\u9519, \u62a5\u9519\u4e3a401"),(0,a.kt)("h3",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RoleHierarchy"),"\u5931\u6548, \u5bfc\u81f4",(0,a.kt)("inlineCode",{parentName:"p"},"MGMT_SUPER_ADMIN"),"\u65e0\u6cd5\u8bbf\u95ee",(0,a.kt)("inlineCode",{parentName:"p"},'@PreAuthorize("hasRole("MGMT_ADMIN")")'),"\u6ce8\u89e3\u4fdd\u62a4\u7684\u63a5\u53e3\u3002",(0,a.kt)("br",null),"\n\u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"MGMT_SUPER_ADMIN"),"\u7ee7\u627f\u81ea",(0,a.kt)("inlineCode",{parentName:"p"},"MGMT_ADMIN"),"\u3002",(0,a.kt)("br",null),"\n\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"@EnableGlobalMethodSecurity"),"\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"@EnableMethodSecurity"),"\u7684\u8fc1\u79fb\u5bfc\u81f4\u3002",(0,a.kt)("br",null),"\n\u8fd9\u4e24\u8005\u5185\u90e8\u5bf9\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"defaultMethodExpressionHandler"),"\u7684\u521d\u59cb\u5316\u884c\u4e3a\u4e0d\u4e00\u81f4\u5bfc\u81f4",(0,a.kt)("inlineCode",{parentName:"p"},"RoleHierarchy"),"\u5931\u6548\u3002",(0,a.kt)("br",null),"\n\u533a\u522b\u5982\u4e0b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@EnableGlobalMethodSecurity"),(0,a.kt)("br",null),"\u5b9e\u73b0\u7c7b`GlobalMethodSecurityConfiguration`\u521b\u5efa`defaultMethodExpressionHandler`\u65f6\u4f1a\u5c1d\u8bd5\u4ece\u5bb9\u5668\u4e2d\u83b7\u53d6`RoleHierarchy`\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@EnableMethodSecurity"),(0,a.kt)("br",null),"\u5b9e\u73b0\u7c7b`PrePostMethodSecurityConfiguration`\u521b\u5efa`defaultMethodExpressionHandler`\u65f6\u4e0d\u4f1a\u4ece\u5bb9\u5668\u4e2d\u83b7\u53d6`RoleHierarchy`\u3002")),(0,a.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848-2"},"\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"spring-security"),"\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"li"},"pull request"),"\u786e\u4fdd\u521d\u59cb\u5316",(0,a.kt)("inlineCode",{parentName:"li"},"defaultMethodExpressionHandler"),"\u884c\u4e3a\u4fdd\u6301\u4e00\u81f4"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u81ea\u8eab\u9879\u76ee\u5f53\u524d\u7684\u89e3\u51b3\u529e\u6cd5\u662f\u521d\u59cb\u5316",(0,a.kt)("inlineCode",{parentName:"li"},"MethodExpressionHandler"))),(0,a.kt)("h3",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="GlobalMethodSecurityConfiguration.java"',title:'"GlobalMethodSecurityConfiguration.java"'},"public class GlobalMethodSecurityConfiguration implements ImportAware, SmartInitializingSingleton, BeanFactoryAware {\n\n    @Override\n    public void afterSingletonsInstantiated() {\n        try {\n            initializeMethodSecurityInterceptor();\n        } catch (Exception ex) {\n            throw new RuntimeException(ex);\n        }\n        PermissionEvaluator permissionEvaluator = getSingleBeanOrNull(PermissionEvaluator.class);\n        if (permissionEvaluator != null) {\n            this.defaultMethodExpressionHandler.setPermissionEvaluator(permissionEvaluator);\n        }\n        RoleHierarchy roleHierarchy = getSingleBeanOrNull(RoleHierarchy.class);\n        if (roleHierarchy != null) {\n            this.defaultMethodExpressionHandler.setRoleHierarchy(roleHierarchy);\n        }\n        AuthenticationTrustResolver trustResolver = getSingleBeanOrNull(AuthenticationTrustResolver.class);\n        if (trustResolver != null) {\n            this.defaultMethodExpressionHandler.setTrustResolver(trustResolver);\n        }\n        GrantedAuthorityDefaults grantedAuthorityDefaults = getSingleBeanOrNull(GrantedAuthorityDefaults.class);\n        if (grantedAuthorityDefaults != null) {\n            this.defaultMethodExpressionHandler.setDefaultRolePrefix(grantedAuthorityDefaults.getRolePrefix());\n        }\n\n        this.defaultMethodExpressionHandler = this.objectPostProcessor.postProcess(this.defaultMethodExpressionHandler);\n    }\n\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="PrePostMethodSecurityConfiguration.java"',title:'"PrePostMethodSecurityConfiguration.java"'},"final class PrePostMethodSecurityConfiguration {\n\n    private static MethodSecurityExpressionHandler defaultExpressionHandler(\n        ObjectProvider<GrantedAuthorityDefaults> defaultsProvider, ApplicationContext context) {\n        DefaultMethodSecurityExpressionHandler handler = new DefaultMethodSecurityExpressionHandler();\n        defaultsProvider.ifAvailable((d) -> handler.setDefaultRolePrefix(d.getRolePrefix()));\n        handler.setApplicationContext(context);\n        return handler;\n    }\n\n}\n")),(0,a.kt)("h3",{id:"\u53c2\u8003-2"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/spring-projects/spring-security/issues/12662"},"issue")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/spring-projects/spring-security/pull/12673"},"pull request")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/spring-projects/spring-security/blob/6.0.x/config/src/main/java/org/springframework/security/config/annotation/method/configuration/GlobalMethodSecurityConfiguration.java"},"GlobalMethodSecurityConfiguration.java ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/spring-projects/spring-security/blob/6.0.x/config/src/main/java/org/springframework/security/config/annotation/method/configuration/PrePostMethodSecurityConfiguration.java"},"PrePostMethodSecurityConfiguration.java"))),(0,a.kt)("h2",{id:"\u5347\u7ea7spring-boot3\u540e\u4f7f\u7528token\u8bf7\u6c42\u4fdd\u62a4\u8d44\u6e90\u62a5\u9519"},"\u5347\u7ea7",(0,a.kt)("inlineCode",{parentName:"h2"},"spring-boot3"),"\u540e\u4f7f\u7528Token\u8bf7\u6c42\u4fdd\u62a4\u8d44\u6e90\u62a5\u9519"),(0,a.kt)("p",null,"\u4f7f\u7528Token\u8bf7\u6c42\u4fdd\u62a4\u8d44\u6e90\u62a5\u9519401"),(0,a.kt)("h3",{id:"\u539f\u56e0-1"},"\u539f\u56e0"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"spring-security"),"\u4e2d\u8fdb\u884c\u4e86\u91cd\u6784\u9700\u8981\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"securityContext"),"\u8fdb\u884c\u914d\u7f6e"),(0,a.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848-3"},"\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"http.securityContext().requireExplicitSave(false).and()")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"http.securityContext().securityContextRepository(new HttpSessionSecurityContextRepository()).and()"))),(0,a.kt)("h3",{id:"\u5907\u6ce8-1"},"\u5907\u6ce8"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"spring6\u4e4b\u540eSecurityContextHolderFilter\u66ff\u6362\u4e86SecurityContextPersistenceFilter",(0,a.kt)("br",null),"\nSecurityContextRepository\u9ed8\u8ba4\u5b9e\u73b0\u4e5f\u53d8\u4e86",(0,a.kt)("br",null),"\n(HttpSessionSecurityContextRepository) -> (RequestAttributeSecurityContextRepository)",(0,a.kt)("br",null))),(0,a.kt)("h3",{id:"\u53c2\u8003-3"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/74629234/spring-security-6-customauthenticationfilterintend-to-replace-the-usernamepassw"},"Spring Security 6 CustomAuthenticationFilter(intend to replace the UsernamePasswordAuthenticationFilter) does not work")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/spring-projects/spring-security/issues/11110"},"Default to SecurityContextHolderFilter instead of SecurityContextPersistenceFilter #11110"))),(0,a.kt)("h2",{id:"\u5347\u7ea7spring-boot3\u540e\u8bf7\u6c42swagger-uiindexhtml\u62a5\u9519"},"\u5347\u7ea7",(0,a.kt)("inlineCode",{parentName:"h2"},"spring-boot3"),"\u540e\u8bf7\u6c42",(0,a.kt)("inlineCode",{parentName:"h2"},"/swagger-ui/index.html"),"\u62a5\u9519"),(0,a.kt)("p",null,"\u63a5\u53e3\u62a5\u9519, \u5185\u5bb9\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log",metastring:'title="chrome"',title:'"chrome"'},"This page isn\u2019t working\nIf the problem continues, contact the site owner.\nHTTP ERROR 401\n")),(0,a.kt)("h3",{id:"\u539f\u56e0-2"},"\u539f\u56e0"),(0,a.kt)("p",null,"springdoc\u7248\u672c\u8fc7\u8001, \u9700\u8981\u5347\u7ea7\u5230v2\u7248\u672c\u3002",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://springdoc.org/"},"springdoc.org"),"\n\u4e0a\u7684\u6709\u76f8\u5173\u8bf4\u660e",(0,a.kt)("inlineCode",{parentName:"p"},"For spring-boot v3 support, make sure you use springdoc-openapi v2")),(0,a.kt)("p",null,"\u672c\u9879\u76ee\u7684\u539f\u59cb\u914d\u7f6e\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"\n<dependency>\n    <groupId>org.springdoc</groupId>\n    <artifactId>springdoc-openapi-ui</artifactId>\n    <version>1.6.14</version>\n</dependency>\n")),(0,a.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848-4"},"\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("p",null,"\u5347\u7ea7springdoc\u7248\u672c\u5230v2, \u5347\u7ea7\u540e\u7684\u914d\u7f6e\u5982\u4e0b, v2\u7684artifactId\u53d1\u751f\u4e86\u53d8\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"\n<dependency>\n    <groupId>org.springdoc</groupId>\n    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>\n    <version>2.0.2</version>\n</dependency>\n")),(0,a.kt)("h3",{id:"\u53c2\u8003-4"},"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://springdoc.org/"},"springdoc.org")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://springdoc.org/v2/"},"springdocv2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/74614369/how-to-run-swagger-3-on-spring-boot-3"},"How to run Swagger 3 on Spring Boot 3"))),(0,a.kt)("h3",{id:"\u4ee3\u7801\u8c03\u7528\u6d41\u7a0b"},"\u4ee3\u7801\u8c03\u7528\u6d41\u7a0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log",metastring:'title="AuthorizationFilter.doFilter"',title:'"AuthorizationFilter.doFilter"'},"this.authorizationManager.check(this::getAuthentication, request);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log",metastring:'title="ObservationAuthorizationManager.check"',title:'"ObservationAuthorizationManager.check"'},"AuthorizationDecision decision = this.delegate.check(wrapped, object);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log",metastring:'title="RequestMatcherDelegatingAuthorizationManager.check"',title:'"RequestMatcherDelegatingAuthorizationManager.check"'},"matcher.matcher(request);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log",metastring:'title="MvcRequestMatcher.matcher"',title:'"MvcRequestMatcher.matcher"'},"// \u8fd4\u56de\u4e86`path`\u4e3a`/error`\u7684`handlerMapping`(\u8bf4\u660e\u6ca1\u6709\u627e\u5230\u5bf9\u5e94\u7684`handlerMapping`)\nMatchableHandlerMapping mapping = getMapping(request);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log",metastring:'title="RequestMatcherDelegatingAuthorizationManager.check"',title:'"RequestMatcherDelegatingAuthorizationManager.check"'},"RequestMatcher matcher = mapping.getRequestMatcher();\nMatchResult matchResult = matcher.matcher(request);\n// \u7531\u4e8eswagger\u5bf9\u5e94\u7684handler\u627e\u4e0d\u5230, \u6240\u4ee5\u6ca1\u6709Match\nif (matchResult.isMatch()) {\n    AuthorizationManager<RequestAuthorizationContext> manager = mapping.getEntry();\n    if (this.logger.isTraceEnabled()) {\n        this.logger.trace(LogMessage.format(\"Checking authorization on %s using %s\", request, manager));\n    }\n    // \u540e\u7eed\u547d\u4e2d\u4e86Mvc [pattern='/*/*.html']\u5bf9\u5e94\u7684Matcher, \u800c\u8be5Matcher\u5bf9\u5e94\u7684\u5339\u914d\u89c4\u5219\u8981\u6c42\u9700\u8981`authentication`\u4e0d\u4e3a\u7a7a, \u5bfc\u81f4\u62a5\u9519\n    return manager.check(authentication, new RequestAuthorizationContext(request, matchResult.getVariables()));\n}\n")),(0,a.kt)("h2",{id:"api\u63a5\u53e3\u62a5\u9519\u540e\u6ca1\u6709\u8fd4\u56de\u5f02\u5e38\u4fe1\u606f"},"api\u63a5\u53e3\u62a5\u9519\u540e\u6ca1\u6709\u8fd4\u56de\u5f02\u5e38\u4fe1\u606f"),(0,a.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848-5"},"\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("p",null,"\u65b0\u7248\u672c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"spring-boot"),"\u9ed8\u8ba4\u4e0d\u8fd4\u56de\u5f02\u5e38\u4fe1\u606f, \u9700\u8981\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u4e2d\u589e\u52a0\u4ee5\u4e0b\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  error:\n    include-message: always\n")))}d.isMDXComponent=!0}}]);