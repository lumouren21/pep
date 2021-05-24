<!DOCTYPE html-entities SYSTEM "http://www.interwoven.com/livesite/xsl/xsl-html.dtd">
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <!-- Skin: XSL_NAME -->

    <xsl:include href="http://www.interwoven.com/livesite/xsl/HTMLTemplates.xsl"/>
    <xsl:include href="http://www.interwoven.com/livesite/xsl/StringTemplates.xsl"/>
    <xsl:template match="/">
        <section id="cbs_update">
            <div class="container-fluid">
                <div class="row">
                    <div class="offset-1 col-10 last_update_text">
                        <div class="main_text" in-context-edit="{//Datum[@ID='Ttitle']/@ID}">
                            $MODEL{//Datum[@ID="Title"]}
                        </div>
                        <div class="learn_more">
                            <a href="search.html">$MODEL{//Datum[@ID="ViewMore"]}</a>
                        </div>
                    </div>
                    <div class="offset-1 col-10 last_update_img">
                        <div class="last_update_img_info owl-carousel">
                            <xsl:for-each select="//Book">
                                <div class="update_book">
                                    <img src="{@cover_path}" alt=""/>
                                    <div class="mask"></div>
                                    <div class="imgaes">
                                        <div class="space">
                                            <a href="/pep/catologDetail.page?topicId={@select_topic_id}">
                                                <img src="/resources/img/index/shoucang.png" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </xsl:for-each>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                $('.last_update_img_info').owlCarousel({
                loop: true,
                margin: 30,
                responsiveClass: true,
                responsive: {
                0: {
                items: 2,
                nav: false,
                loop: true
                },
                768: {
                items: 4,
                nav: false,
                loop: true
                },
                1200: {
                items: 8,
                nav: false,
                loop: true
                }
                }
                })
            </script>
        </section>
    </xsl:template>
</xsl:stylesheet>