<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <!-- Skin: XSL_NAME -->
    <!--
        <xsl:include href="http://www.interwoven.com/livesite/xsl/HTMLTemplates.xsl"/>
        <xsl:include href="http://www.interwoven.com/livesite/xsl/StringTemplates.xsl"/>
        -->
    <xsl:template match="/">
        <section>
            <div class="container-fluid bottom_content">
                <div class="row">
                    <div class="offset-2 col-4 col-lg-4 offset-lg-3 nav_box">
                        <ul class="d-flex text-center bottom_ul">
                            <xsl:for-each
                                    select="//site-map/segment/node/label[@key='main']/following-sibling::node[@visible-in-sitemap='true']">
                                    <xsl:choose>
                                        <xsl:when test="link/@type = 'MenuNode'">
                                            <li class="position-relative">
                                                <xsl:value-of select="label"/>
                                                <ul class="nav_ul show_drop">
                                                    <xsl:for-each select="node">
                                                        <li>
                                                           <xsl:apply-templates select="node[@visible-in-sitemap='true']"/>
                                                        </li>
                                                    </xsl:for-each>

                                                </ul>
                                            </li>
                                        </xsl:when>
                                        <xsl:otherwise>
                                            <li>
                                                <xsl:apply-templates select="node[@visible-in-sitemap='true']"/>
                                            </li>
                                        </xsl:otherwise>
                                    </xsl:choose>
                                    <xsl:apply-templates/>
                            </xsl:for-each>
                        </ul>
                    </div>
                    <div class="offset-lg-1 col-lg-8  top_seach0 col-5">
                        <div class="top_input d-flex justify-content-end">
                            <input type="text" placeholder="请输入关键字" data-provide="typeahead" autocomplete="off"
                                   id="searchWordsM"/>
                            <div class="top_search d-flex align-items-center">
                                <img src="$URL_PREFIX/resources/img/index/search.png"/>
                            </div>
                        </div>
                    </div>
                    <button onclick="open_menu()" type="button"
                            class="col-2 col-lg-2 d-flex justify-content-end justify-content-lg-center align-items-center top_profile hamburger is-closed animated fadeInLeft">
                        <span class="hamb-top"></span>
                        <span class="hamb-middle"></span>
                        <span class="hamb-bottom"></span>
                    </button>

                </div>
            </div>
        </section>
        <div class="overlay" onclick="close_menu()"></div>

        <!-- 手机导航 -->

        <nav class="navbar navbar-inverse navbar-fixed-top navbar-box" id="sidebar-wrapper" role="navigation">
            <ul class="nav sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                        <xsl:value-of select="//Data/Datum[@ID='menu']"/>
                    </a>
                </li>
                <li>
                    <a>
                        <xsl:attribute name="href">
                            <xsl:value-of select="//Data/Datum[@ID='homeLink']"/>
                        </xsl:attribute>
                        <i class="fa fa-fw fa-home"></i>
                        <xsl:value-of select="//Data/Datum[@ID='index']"/>
                    </a>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown">
                        <xsl:attribute name="href">
                            <xsl:value-of select="//Data/Data/Datum[@ID='homeLink']"/>
                        </xsl:attribute>
                        <i class="fa fa-fw fa-plus"></i>
                        <xsl:value-of select="//Data/Datum[@ID='special']"/>
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" role="menu">
                        <xsl:for-each select="/Properties/Data/Group[@Name='showTab']">
                            <li>
                                <a>
                                    <xsl:attribute name="href">
                                        <xsl:value-of select="Datum[@Name='showLink']"/>
                                    </xsl:attribute>
                                    <xsl:value-of select="Datum[@Name='showName']"/>
                                </a>
                            </li>
                        </xsl:for-each>
                    </ul>
                </li>
                <xsl:for-each select="/Properties/Data/Group[@Name='Tab']">
                    <li>
                        <a>
                            <xsl:attribute name="href">
                                <xsl:value-of select="Datum[@Name='tabLink']"/>
                            </xsl:attribute>
                            <i class="fa fa-fw fa-bank"></i>
                            <span>
                                <xsl:attribute name="in-context-edit">
                                    <xsl:value-of select="Datum[@Name='tabName']/@ID"/>
                                </xsl:attribute>
                                <xsl:value-of select="Datum[@Name='tabName']" disable-output-escaping="yes"/>
                            </span>
                        </a>
                    </li>
                </xsl:for-each>
            </ul>
        </nav>
    </xsl:template>
    <xsl:template match="node">
        <a>
            <xsl:attribute name="href">
                <xsl:choose>
                    <xsl:when test="link/@type ='url'">
                        <xsl:value-of select="link/value"/>
                    </xsl:when>
                    <xsl:otherwise>$PAGE_LINK[<xsl:value-of select="link/value"/>]
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:attribute>
            <xsl:value-of select="label"/>
        </a>
    </xsl:template>
</xsl:stylesheet>
