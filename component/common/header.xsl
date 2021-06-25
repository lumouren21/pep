<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <!-- Skin: XSL_NAME -->

    <xsl:template match="/">

        <header id="cbs_header">

            <div class="container-fluid top_content">
                <div class="row">
                    <div class="col-5 offset-lg-1 col-lg-5 d-flex align-items-center justify-content-center justify-content-lg-start">
                        <a href="$URL_PREFIX[/pep]">
                            <img src="{//Data/Datum[@ID='LOGO']/Image/Path}"/>
                        </a>
                        <div class="top_content_word">
                            <span in-context-edit="{//Data/Datum[@ID='SITE_NAME']/@ID}">
                                <xsl:value-of select="//Data/Datum[@ID='SITE_NAME']" disable-output-escaping="yes"/>
                            </span>
                        </div>

                    </div>
                    <div class="col-lg-4 d-lg-block top_seach col-5">
                        <div class="top_input d-flex justify-content-end">
                            <input type="text" placeholder="请输入关键字" data-provide="typeahead" autocomplete="off"
                                   id="searchWords"/>
                            <div class="top_search d-flex align-items-center" onclick="searchContent()">
                                <img src="$URL_PREFIX/resources/img/index/search.png"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-2 col-lg-2 d-flex justify-content-end justify-content-lg-center align-items-center top_profile">
                        <div class="top_profile_img">
                            <img src="$URL_PREFIX/resources/img/index/myhead.jpg"/>
                        </div>
                        <div class="dropdown show top_arrows">
                            <img class="dropdown-toggle" id="dropdownMenuLink" data-toggle="dropdown"
                                 aria-haspopup="true" aria-expanded="false"
                                 src="$URL_PREFIX/resources/img/index/triangle.png"/>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                <xsl:for-each select="//Group[@Name='菜单选项']">
                                    <div class="dropdown_content">
                                        <img alt="{Datum[@Name='图标']/Image/Description}"
                                             src="{Datum[@Name='图标']/Image/Path}"/>
                                        <a class="dropdown-item" href="{Datum[@Name='链接']}">
                                            <xsl:value-of select="Datum[@Name='名称']"/>
                                        </a>
                                    </div>
                                </xsl:for-each>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <script type="text/javascript">
            var _paq = window._paq || [];
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
            var u="//192.168.190.122:99/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '3']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js';
            s.parentNode.insertBefore(g,s);
            })();
        </script>
    </xsl:template>
</xsl:stylesheet>