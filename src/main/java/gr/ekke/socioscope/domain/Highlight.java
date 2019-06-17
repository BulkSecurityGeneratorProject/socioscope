package gr.ekke.socioscope.domain;

import javax.validation.constraints.NotBlank;

/**
 * A Highlight.
 */
public class Highlight {

    @NotBlank
    private String id;

    private String description;

    private SeriesOptions seriesOptions;

    private String visType;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public SeriesOptions getSeriesOptions() {
        return seriesOptions;
    }

    public void setSeriesOptions(SeriesOptions seriesOptions) {
        this.seriesOptions = seriesOptions;
    }

    public String getVisType() {
        return visType;
    }

    public void setVisType(String visType) {
        this.visType = visType;
    }
}