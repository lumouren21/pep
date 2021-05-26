<!DOCTYPE html-entities SYSTEM "http://www.interwoven.com/livesite/xsl/xsl-html.dtd">
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <!-- Skin: XSL_NAME -->

    <xsl:include href="http://www.interwoven.com/livesite/xsl/HTMLTemplates.xsl"/>
    <xsl:include href="http://www.interwoven.com/livesite/xsl/StringTemplates.xsl"/>
    <xsl:template match="/">
        <section id="social_attention" class="card pep-card">
            <div class="card-header">
                <span in-text-edit="Title">$MODEL{//Datum[@ID="Title"]}</span>
            </div>
            <div class="card-body">
            <xsl:for-each select="//Book">
                <div class="society_content_info"><a href="search.page?keyWord={@words}">
                    <div class="society_text"><xsl:value-of select="@words"/></div>
                    <div class="society_plan">
                        <div class="society_plan_info" style="width:{@ratio}"></div>
                    </div>
                    <div class="society_num"><xsl:value-of select="@ranking"/></div>
                </a></div>
            </xsl:for-each>
            </div>
        </section>
    </xsl:template>
</xsl:stylesheet>